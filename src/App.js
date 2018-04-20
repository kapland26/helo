import React, { Component } from 'react';
import './App.css';

import routes from "./routes";
import Nav from './component/Nav/Nav.js';


class App extends Component {

  render() {
    return (
      <div className = "App">
      <Nav/>
        <div className = "body-container">
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
