import React, {Component} from 'react';
import {Button, Spinner}  from 'react-bootstrap';
import axios              from 'axios';

import Assets from '../../assets';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      show  : true,
      meta  : {
        image    : '',
        title    : '',
        tags     : '',
        isLoading: false,
        isError  : false
      }
    }
  }

  generateCode = () => {
    const min    = 1;
    const max    = 269000;
    const rand   = min + Math.random() * (max - min);
    const number = Math.floor(rand);
    this.setState({number: number});
    this.getMeta(number);
  };

  async getMeta(num) {
    this.setState({
      meta: {
        image    : '',
        title    : '',
        tags     : '',
        isLoading: true
      }
    });
    try {
      let res     = await axios.get('https://nhentai.net/g/' + num);
      const regex = /content="(.*)"/gm;
      const str   = res.data;
      let array   = [];
      let m;
      while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        // The result can be accessed through the `m`-variable.
        array.push(m[1]);
      }
      this.setState({
        meta: {
          image    : array[2],
          title    : array[1],
          tags     : array[8],
          isLoading: false
        }
      })
    } catch (e) {
      this.setState({
        meta: {
          isLoading: false,
          isError  : true
        }
      });
      console.log('This is your error' + e);
    }
  };

  render() {
    const {number, meta} = this.state;
    return (
      <div className="container">
        <div className="title">
          <img src={Assets.NHen} alt="nHentai Logo" onContextMenu={e => e.preventDefault()}/><br/>
          <h1>NHentai Number Generator</h1>
          <i>Your pleasure, my pleasure! No, it's OUR PLEASURE!</i>
        </div>
        <div className="generate">
          <Button variant="light" onClick={e => this.generateCode()}>Generate Number</Button><br/>
          {
            number !== 0 ?
              <div className="row message">
                <div className="col-12 col-md-6">
                  <b>
                    This is your nHentai number:<br/>
                    Click here to access the doujin: <br/>
                  </b>
                  <a href={`https://nhentai.net/g/${number}`} target="_blank" rel="noopener noreferrer">
                    {number}
                  </a>
                  <br/>
                  Use VPN to access that website if your provider blocks.
                </div>
                <div className="col-12 col-md-6">
                  {meta.isLoading ? <Spinner animation="grow" /> :
                    <div className="doujin">
                      {meta.isError ? 'Preview Not Available' :
                        <div className="doujin-info">
                          <b>Doujin Info</b> <br/>
                          <div className="row">
                            <div className="col-6 col-md-4">
                              <a href={`https://nhentai.net/g/${number}`} target="_blank" rel="noopener noreferrer">
                                <img src={meta.image} alt="thumbnail"/>
                              </a>
                            </div>
                            <div className="col-6 col-md-8">
                              Title <br/>
                              {meta.title}<br/><br/>
                              Tags <br/>
                              {meta.tags}
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  }
                </div>
              </div>
              :
              <div className="message">
                Please click "Generate Number" button
              </div>
          }
        </div>
      </div>
    );
  }
}

export default Home;
