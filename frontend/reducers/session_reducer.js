import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import {merge} from 'lodash';

const null_session_state = {
    id: null,
};

const sessionReducer = (state = null_session_state, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, action.user);
        case LOGOUT_CURRENT_USER:
            return null_session_state;
        default:
            return oldState;
    }
};

export default sessionReducer;