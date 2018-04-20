import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateUsername, updateId, updateProfPic} from '../../ducks/reducer.js';
import logo from "./logo.png";
import './../../reset.css';
import './Auth.css';

class Auth extends Component {

    constructor(){
        super();

        this.state={
            usernameIn : "",
            passwordIn : "",
        }
    }

    handleUserIn(e){
        this.setState({
            usernameIn: e
        })
    }
    handlePassIn(e){
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
        let self = this;
        axios.post("/api/newuser", body).then(function (response) {
            let {profile_pic, username, id} = response.data[0];
            self.props.updateUsername(username);
            self.props.updateId(id);
            self.props.updateProfPic(profile_pic);
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
        let self = this;
        axios.post("/api/user", body).then(function (response) {
            let {profile_pic, username, id} = response.data[0];
            self.props.updateUsername(username);
            self.props.updateId(id);
            self.props.updateProfPic(profile_pic);
        })
        .catch(function (error) {
            console.log(error)
            alert("Bad login!");
        });
        this.clear();
    }
    render(){
        return (
            <div className="Auth">
                <img src={logo} alt='log'/>
                <h1>Helo</h1>
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

export default connect(null, {updateUsername, updateId, updateProfPic})(Auth);
