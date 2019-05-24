import React from 'react';
import {merge} from 'lodash';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = merge({}, this.state);
        this.props.processForm(user);
    }

    handleOnChange(field){
        return e => {
            this.setState({[field] : e.target.value});
        };
    }

    render() {
        const alternativeLink = if(this.props.formType)
    }
}

export default SessionForm;