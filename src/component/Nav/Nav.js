import React from 'react';
import {Link} from 'react-router-dom';
// import './Nav.css';

export default function Nav( props ) {

    return(
        <div className="Nav">
            <Link to={'/dashboard'}><button>Home</button></Link>
            <Link to={'/new'}><button>New Post</button></Link>
            <Link to={'/'}><button> Logout </button></Link>
        </div>
    )

}