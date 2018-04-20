import React, { Component } from 'react';

class Auth extends Component {

    render(){
        return (
            <div>
                Auth
                <br/><br/>
                <h3>Username</h3>
                <input></input>
                <h3>Password</h3>
                <input></input>
            </div>
        )
    }
}

// export default connect(mapStateToProps, {})(Auth);
export default Auth;