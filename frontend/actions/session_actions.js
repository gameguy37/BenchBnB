import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const login = (formUser) => dispatch => {
    return SessionUtil.login(formUser)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveSessionErrors(err.responseJSON))
        );
};

export const logout = () => dispatch => {
    return SessionUtil.logout()
        .then(
            () => dispatch(logoutCurrentUser()),
            err => dispatch(receiveSessionErrors(err.responseJSON))
        );
};

export const signup = (formUser) => dispatch => {
    return SessionUtil.signup(formUser)
        .then(
            user => dispatch(receiveCurrentUser(user)), 
            err => dispatch(receiveSessionErrors(err.responseJSON))
        );
};

export const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user,
    };
};

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
};

//  err is an array
export const receiveSessionErrors = err => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: err,
    };
};