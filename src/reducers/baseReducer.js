import { OrderedMap } from "immutable";

import {
    SET_TRUE,
    SET_FALSE,
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
} from "../actions/types";

const RECEIVED_SUCCESS = "RECEIVED_SUCCESS";
const RECEIVED_FAILURE = "RECEIVED_FAILURE";
const REQUESTING = "REQUESTING";

const INITIAL_STATE = OrderedMap({
    truthiness: null,
    status: "NONE",
    getUsersStatus: "NONE",
    users: OrderedMap(),
});

const baseReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TRUE:
            return state.set("truthiness", "true");
        case SET_FALSE:
            return state.set("truthiness", "false");
        case GET_DATA:
            return state.set("status", REQUESTING);
        case GET_DATA_SUCCESS:
            return state.set("status", RECEIVED_SUCCESS);
        case GET_DATA_FAILURE:
            return state.set("status", RECEIVED_FAILURE);
        case GET_USERS:
            return state.set("getUsersStatus", REQUESTING);
        case GET_USERS_SUCCESS:
            return state
                .set("getUsersStatus", RECEIVED_SUCCESS)
                .set("users", action.payload);
        case GET_USERS_FAILURE:
            return state.set("getUsersStatus", RECEIVED_FAILURE);
        default:
            return state;
    }
};

export default baseReducer;
