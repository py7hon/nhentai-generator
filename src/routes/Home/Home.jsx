import React, {Component} from 'react';

import Assets from '../../assets';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <img src={Assets.NHen}/>
        </div>
      </div>
    );
  }
}

export default Home;
