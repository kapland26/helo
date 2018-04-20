import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Auth extends Component {

    constructor(){
        super();

        this.state={
            usernameIn : "",
            passwordIn : "",
        }
    }

    handleUserIn(e){
        console.log("In user! "+ e)
        this.setState({
            usernameIn: e
        })
    }
    handlePassIn(e){
        console.log("In pass! "+ e)
        this.setState({
            passwordIn: e
        })
    }
    clear(){
        this.setState({
            usernameIn: "",
            passwordIn: "",
        })
    }
    handleRegister(){
        let body={
            username: this.state.usernameIn,
            password: this.state.passwordIn
        }
        axios.post("/api/newuser", body).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            alert("Bad register!");
        });
        this.clear();
    }
    handleLogin(){
        let body={
            username: this.state.usernameIn,
            password: this.state.passwordIn
        }
        axios.post("/api/user", body).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            alert("Bad login!");
        });
        this.clear();
    }
    render(){
        return (
            <div>
                Auth
                <br/><br/>
                <h3>Username</h3>
                <input onChange={(e)=> this.handleUserIn(e.target.value)} type="text" value={this.state.usernameIn}/>
                <h3>Password</h3>
                <input onChange={(e)=> this.handlePassIn(e.target.value)} type="text" value={this.state.passwordIn}/>
                <br/><br/>
                <Link to={'/dashboard'}><button onClick = {()=> this.handleLogin()}>Login</button></Link><br/>
                <Link to={'/dashboard'}><button onClick = {()=> this.handleRegister()}>Register</button></Link>
            </div>
        )
    }
}

// export default connect(mapStateToProps, {})(Auth);
export default Auth;