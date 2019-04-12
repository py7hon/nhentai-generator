import React, {Component}     from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home                   from './routes/Home/Home';
import About                  from "./routes/About/About";

import "./styles/index.scss";

class App extends Component {
  routes = [
    {
      path     : '/',
      exact    : true,
      component: Home
    },
    {
      path     : '/about',
      exact    : true,
      component: About
    },
  ];

  render() {
    return (
      <HashRouter>
        <div className="App">
          {this.routes.map((route, i) => <Route {...route}/>)}
        </div>
      </HashRouter>
    );
  }
}

export default App;
