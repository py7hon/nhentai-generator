import React, {Component}  from 'react';
import {HashRouter, Route} from "react-router-dom";
import {NavbarHeader}      from "./components";
import Routes              from './routes';

import "./styles/index.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <NavbarHeader/>
        {Routes.map((route, i) => <Route key={i} {...route}/>)}
      </HashRouter>
    );
  }
}

export default App;
