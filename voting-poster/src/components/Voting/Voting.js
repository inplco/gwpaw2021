import React, { Component } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as Ably from "ably";
import "./voting.css";
import '../../App.css';
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard';

const storeinit = require('../init.json');

//Fisher-Yates-Durstenfeld shuffle
function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

const store = shuffle(storeinit);

let realTime = null;
let myVotingChannel= null;

class Voting extends Component {
  state = {
    cards: store,
    flipped: null,
  };

  componentDidMount(){
    realTime = new Ably.Realtime({ authUrl: "/publish" });
    realTime.connection.once("connected", () => {
       myVotingChannel = realTime.channels.get("voting-poster");
    });
  }
  clickHandler = (card) => {
    if (this.state.flipped) {
      return;
    }

    this.setState({
      flipped: card,
    });
  };

  voteHandler = (card) => {
    const regVote = async () => {
      let resDump = await axios.get('/read-vote', { params : { name: card.value, vote: 1 } });
      if (resDump.data.type === 'auth'){
        window.history.push('/');
      }
      }
    regVote();
    myVotingChannel.publish("vote", card.value, (err) => {
      console.log("ErrorStatus: ", err);
      console.log("attempting disconnect");
    });
  };

  componentWillUnmount(){
    realTime.connection.off();
  }
  render() {
    const hasVoted = !!this.state.flipped;
    const card = this.state.flipped;
    return (
      <React.Fragment>
      <div className="app-logo"></div>
      <div className="voting-back">
        <h1 className="voting-heading" style={{ fontFamily: 'Rajdhani', marginTop:25 }}>Vote for your favourite Poster</h1>
        <div style={{ marginTop: 10, marginLeft: 200, marginRight: 200 }}>
        <p style={{ fontSize:18, fontWeight: 600, color: 'yellow' }}>Search for your poster's title below [hint: CMD/CTRL + F], select it, and then click on 'CAST FINAL VOTE & LOG OUT' at the top or bottom of the page to cast your vote.<br></br>Once you have voted, you will be automatically logged out and your vote will be permanently registered. You will not be able to login again into this portal once your vote has been registered.</p>
        </div>
        {hasVoted ? (<Link to="/logout" className="show-stats-btn hovertext" onClick={() => this.voteHandler(card)}>CAST FINAL VOTE & LOG OUT</Link>) : (<Link to="/logout" className="show-stats-btn" style={{ background:'#a8a8a8', pointerEvents:'none' }}>CAST FINAL VOTE & LOG OUT</Link>)}
        <div className="voting-body" style={{ marginTop:30, marginLeft:100, marginRight:100 }}>
          <div className="voting-main">
            {this.state.cards.map((card) => {
              return (
                <section key={card.id} className="card-container">
                  <div className={`card ${ this.state.flipped === card ? "flipped" : "" } ${hasVoted ? "remove-mouse-pointer" : "pointer"}`} onClick={() => this.clickHandler(card)}>
                    <div className="front">{card.name}</div>
                    <div className="back"><span className="blink">YOUR CHOICE HAS BEEN NOTED!</span><span style={{ marginLeft:50, marginRight:50 }}></span>
                      <button className="refresh-btn" style={{ fontSize: 16, marginTop:-85 }} onClick={()=>this.setState({flipped:null})}>CLICK TO MAKE ANOTHER CHOICE</button>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
        {hasVoted ? (<Link to="/logout" className="show-stats-btn hovertext" onClick={() => this.voteHandler(card)}>CAST FINAL VOTE & LOG OUT</Link>) : (<Link to="/logout" className="show-stats-btn" style={{ background:'#a8a8a8', pointerEvents:'none' }}>CAST FINAL VOTE & LOG OUT</Link>)}
        <div style={{ marginTop:100, position:'center' }}><span>_</span>
        </div>

        <div className="footer" style={{ position:'fixed' }}>
          <div>
            <img alt="logo" className="thumbnailjs" src="/gwpaw2021/nodejs.svg"/>
            <img alt="logo" className="thumbnailjs" src="/gwpaw2021/reactjs.png"/>
            <img alt="logo" className="thumbnailgit" src="/gwpaw2021/github.png"/><a href="https://github.com/inplco/gwpaw2021" target="_">github.com/inplco/gwpaw2021</a>
          </div>
          <div style={{ marginTop:-13 }}>
            <p>Powered by <a href="http://inpl.one" target = "_">Interplanetary Company</a><sup>TM</sup></p>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Voting;
