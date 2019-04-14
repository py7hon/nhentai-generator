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
      detail: {
        thumbnail: '',
        title    : '',
        details  : {
          tags      : [],
          languages : [],
        },
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
      detail: {
        thumbnail: '',
        title    : '',
        details  : {
          tags      : [],
          languages : [],
        },
        isLoading: true,
        isError  : false
      }
    });
    try {
      let res = await axios.get('https://apis.nhent.ai/g/' + num);
      this.setState({
        detail: {
          title    : res.data.title,
          thumbnail: res.data.thumbnails[0],
          details  : {
            tags      : res.data.details.tags,
            languages : res.data.details.languages,
          }
        }
      });
      console.log(res);
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
    const {number, detail} = this.state;
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
                  <div className="mirror">
                    <a href={`https://nhtai.bakaa.me/g/${number}`} target="_blank" rel="noopener noreferrer">
                      Click here if you want to access without VPN
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  {detail.isLoading ? <Spinner animation="grow"/> :
                    <div className="doujin">
                      {detail.isError ? 'Preview Not Available' :
                        <div className="doujin-info">
                          <b>Doujin Info</b> <br/>
                          <div className="row">
                            <div className="col-6 col-md-4">
                              <a href={`https://nhentai.net/g/${number}`} target="_blank" rel="noopener noreferrer">
                                <img src={detail.thumbnail} alt="thumbnail"/>
                              </a>
                            </div>
                            <div className="col-6 col-md-8">
                              Title <br/>
                              {detail.title}<br/>
                              Tags <br/>
                              {detail.details.tags.map((item, i) => <span key={i}>{item}, </span>)}<br/>
                              Languages <br/>
                              {detail.details.languages.map((item, i) => <span key={i}>{item} </span>)}<br/>
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
