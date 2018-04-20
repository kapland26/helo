import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';

import routes from "./routes";
import Nav from './component/Nav/Nav.js';


class App extends Component {

  render() {
    return (
      <div className = "App">
      <Nav/>
      <HashRouter>
        {routes}
      </HashRouter>
      </div>
    );
  }
}

export default App;
