import { ofType, combineEpics } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";
import { SET_TRUE, SET_FALSE, GET_DATA, GET_USERS } from "../actions/types";
import { ajax } from "rxjs/ajax";
import {
    getDataSuccess,
    getDataFailure,
    getUsersSuccess,
    getUsersFailure,
} from "../actions";
import { map, mergeMap, of } from "rxjs";
import { catchError } from "rxjs";

const epic1 = (action$, state$) =>
    action$.pipe(ofType(SET_TRUE), delay(1000), mapTo({ type: SET_FALSE }));

const epic2 = (action$, state$) =>
    action$.pipe(ofType(SET_FALSE), delay(1000), mapTo({ type: SET_TRUE }));

const getDataEpic = (action$) =>
    action$.pipe(
        ofType(GET_DATA),
        mergeMap((action) =>
            ajax.getJSON("http://localhost:4000/getData").pipe(
                map((response) => getDataSuccess(response)),
                catchError((error) => of(getDataFailure(error.xhr.response)))
            )
        )
    );

const getUsersEpic = (action$) =>
    action$.pipe(
        ofType(GET_USERS),
        mergeMap((action) =>
            ajax.getJSON("http://localhost:4000/getUsers").pipe(
                map((response) => getUsersSuccess(response)),
                catchError((error) => of(getUsersFailure(error.xhr.response)))
            )
        )
    );

export default combineEpics(epic1, epic2, getDataEpic, getUsersEpic);
