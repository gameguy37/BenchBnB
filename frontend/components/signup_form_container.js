import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../actions/session_actions';
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        formType: "signup",
        errors: state.errors.session,
        alternateLink: <Link to="/login">login</Link>,
    };
};

const mdp = dispatch => {
    return {
        processForm: (formUser) => dispatch(signup(formUser)),
    };
};


export default connect(msp, mdp)(SessionForm);