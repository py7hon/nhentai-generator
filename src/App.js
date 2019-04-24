import React, {Component}           from 'react';
import {HashRouter, Route}          from "react-router-dom";
import {NavbarHeader, WarningModal} from "./components";
import Routes                       from './routes';

import "./styles/index.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

  closeModal() {
    this.setState({show: false});
  }

  render() {
    const {show} = this.state;
    return (
      <HashRouter>
        <NavbarHeader/>
        {Routes.map((route, i) => <Route key={i} {...route}/>)}
        <WarningModal open={show} onHide={e => this.closeModal()}/>
      </HashRouter>
    );
  }
}

export default App;
