import * as BenchUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const fetchBenches = () => dispatch => {
    return BenchUtil.fetchBenches().then(benches => dispatch(receiveBenches(benches)));
};

const receiveBenches = benches => {
    return {
        type: RECEIVE_BENCHES,
        benches,
    };
};