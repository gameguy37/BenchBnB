import { RECEIVE_BENCHES } from '../actions/bench_actions';
import { merge } from 'lodash';

const benchesReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BENCHES:
            return action.benches;
        default:
            return oldState;
    }
};

export default benchesReducer;