import React from 'react';
import {merge} from 'lodash';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleErrors = this.handleErrors.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = merge({}, this.state);
        this.props.processForm(user);
    }

    update(field){
        return e => {
            this.setState({ [field] : e.target.value });
        };
    }

    handleErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => {
                    return <li key={idx}>{error}</li>
                })}
            </ul>
        );
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form-box">
                    Welcome to BenchBnB!
                    <br/>
                    Please {this.props.formType} or {this.props.alternateLink}
                    {this.handleErrors()}
                    <div className="form">
                        <br/>
                        <label>Username:
                            <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="input"/>
                        </label>
                        <br/>
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="input"/>
                        </label>
                        <br/>
                        <input className="form-submit" type="submit" value={this.props.formType}/>
                    </div>
                </form>
            </div>
        );
    }
}
    
export default SessionForm;