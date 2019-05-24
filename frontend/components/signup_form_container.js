import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../actions/session_actions';

const msp = (state, ownProps) => {
    return {
        formType: "signup",
        errors: state.errors.session,
    };
};

const mdp = dispatch => {
    return {
        processForm: (userForm) => dispatch(signup(userForm)),
    };
};


export default connect(msp, mdp)(SessionForm);