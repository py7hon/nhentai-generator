import React, {Component} from 'react';
import {Button}           from 'react-bootstrap';

import {WarningModal} from '../../components';
import Assets         from '../../assets';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      show  : true
    }
  }

  generateCode = () => {
    const min  = 1;
    const max  = 265000;
    const rand = min + Math.random() * (max - min);
    this.setState({number: Math.floor(rand)});
  };

  closeModal() {
    this.setState({ show: false });
  }

  render() {
    const {number,show} = this.state;
    return (
      <div className="container">
        <div className="title">
          <img src={Assets.NHen} alt="nHentai Logo" onContextMenu={e => e.preventDefault()}/><br/>
          <h1>NHentai Number Generator</h1>
          <i>Your pleasure, my pleasure! No, it's OUR PLEASURE!</i>
        </div>
        <div className="generate">
          <Button variant="light" onClick={e => this.generateCode()}>Generate Number</Button><br/>
          <div className="message">
            {
              number === 0 ? "Please click \"Generate Number\" button" :
                <div>
                  This is your nHentai number:<br/>
                  Click the number to access the doujin: <br/>
                  <a href={`https://nhentai.net/g/${number}`} target="_blank" rel="noopener noreferrer">{number}</a>
                  <br/>
                  Use VPN to access to website if your provider blocks your wae.
                </div>
            }
          </div>
        </div>
        <WarningModal open={show} onHide={e => this.closeModal()}/>
      </div>
    );
  }
}

export default Home;
