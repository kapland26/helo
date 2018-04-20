import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './../../reset.css';
import './Nav.css';

function Nav( props ) {

    return(
        <div className="Nav">
            <img src={props.profile_pic} alt="profile" />
            <h3> {props.username} </h3>
            <Link to={'/dashboard'}><button>Home</button></Link>
            <Link to={'/new'}><button>New Post</button></Link>
            <Link to={'/'}><button> Logout </button></Link>
        </div>
    )
}

function mapStateToProps(state){
    return{
        username: state.username,
        profile_pic: state.profile_pic
    }
}

export default connect(mapStateToProps, {})(Nav);