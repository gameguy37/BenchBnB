import { connect } from 'react-redux';
import Greeting from './greeting';
import {logout} from '../actions/session_actions';

const msp = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id],
    };
};

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(msp, mdp)(Greeting);