import React, {Component} from 'react';
import {Button}           from 'react-bootstrap';

import Assets from '../../assets';
import './Home.scss';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0
    }
  }
  generateCode = () => {
    const min = 1;
    const max = 265000;
    const rand = min + Math.random() * (max - min);
    this.setState({ number: Math.floor(rand) });
  };

  render() {
    console.log(this.state.number);
    const {number} = this.state;
    return (
      <div className="container">
        <div className="title">
          <img src={Assets.NHen} alt="nHentai Logo"/><br/>
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
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
