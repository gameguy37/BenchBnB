import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.currentUser) {
            return (
                <>
                <h1>Hello {this.props.currentUser.username}!</h1>
                <button onClick={this.props.logout} >Logout</button>
                </>
            );
        } else {
            return (
                <div>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </div>
            );
        }
    }
}

export default Greeting;