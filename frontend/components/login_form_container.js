import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../actions/session_actions';
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        formType: "login",
        errors: state.errors.session,
        alternateLink: <Link to="/signup">signup</Link>,
    };
};

const mdp = dispatch => {
    return {
        processForm: (formUser) => dispatch(login(formUser)),
    };
};


export default connect(msp,mdp)(SessionForm);