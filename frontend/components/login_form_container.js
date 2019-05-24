import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../actions/session_actions';

const msp = (state, ownProps) => {
    return {
        formType: "login",
        errors: state.errors.session,
    };
};

const mdp = dispatch => {
    return {
        processForm: (userForm) => dispatch(login(userForm)),
    };
};


export default connect(msp,mdp)(SessionForm);