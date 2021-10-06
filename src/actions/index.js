import {
    SET_TRUE,
    SET_FALSE,
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
} from "./types";

export const setTrue = () => {
    return {
        type: SET_TRUE,
    };
};

export const setFalse = () => {
    return {
        type: SET_FALSE,
    };
};

export const getData = () => {
    return {
        type: GET_DATA,
    };
};

export const getDataSuccess = (payload) => {
    return {
        type: GET_DATA_SUCCESS,
        payload,
    };
};

export const getDataFailure = (payload) => {
    return {
        type: GET_DATA_FAILURE,
        payload,
    };
};

export const getUsers = () => {
    return {
        type: GET_USERS,
    };
};

export const getUsersSuccess = (payload) => {
    return {
        type: GET_USERS_SUCCESS,
        payload,
    };
};

export const getUsersFailure = (payload) => {
    return {
        type: GET_USERS_FAILURE,
        payload,
    };
};
