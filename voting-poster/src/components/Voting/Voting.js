import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import * as Ably from "ably";
import "./voting.css";
import Dashboard from '../Dashboard/Dashboard';
import Logout from '../Logout/Logout';
import '../../App.css';

const storeinit = require('../store.json');

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
       // create the channel object
       myVotingChannel = realTime.channels.get("voting-poster");
    });
  }
  clickHandler = (card) => {
    if (this.state.flipped) {
      return;
    }


      myVotingChannel.publish("vote", card.value, (err) => {
        console.log("ErrorStatus: ", err);
      });

    this.setState({
      flipped: card,
    });
  };
  componentWillUnmount(){
    realTime.connection.off();
  }
  render() {
    const hasVoted = !!this.state.flipped;
    return (
      <React.Fragment>
      <div className="voting-back">
        <h1 className="voting-heading" style={{ fontFamily: 'Rajdhani', marginTop:2 }}>Vote for your favourite Poster</h1>
        <div style={{ marginTop: 10, marginLeft: 200, marginRight: 200 }}>
        <p style={{ fontSize:18, fontWeight: 500, color: 'yellow' }}>Search [hint: CMD/CTRL + F] for your poster's title below, select it, and then click on 'VOTE' at the top or bottom of the page to cast your vote.<br></br>Once you have voted, you will be automatically logged out and your vote will be permanently registered. You will not be able to login again into this portal once your vote has been registered.</p>
        </div>
        {hasVoted ? (<Link to="/logout" className="show-stats-btn">VOTE</Link>) : (<Link to="/logout" className="show-stats-btn" style={{ background:'#a8a8a8', pointerEvents:'none' }}>VOTE</Link>)}
        <div className="voting-body" style={{ marginTop:30, marginLeft:100, marginRight:100 }}>
          <div className="voting-main">
            {this.state.cards.map((card) => {
              return (
                <section key={card.id} className="card-container">
                  <div
                    className={`card ${
                      this.state.flipped === card ? "flipped" : ""
                    } ${hasVoted ? "remove-mouse-pointer" : "pointer"}`}
                    onClick={() => this.clickHandler(card)}
                  >
                    <div className="front">{card.name}</div>
                    <div className="back">YOUR CHOICE HAS BEEN NOTED!<span style={{ marginLeft:50, marginRight:50 }}></span>
                      <button className="refresh-btn" style={{ fontSize: 14, marginTop:-85 }} onClick={()=>this.setState({flipped:null})}>CLICK TO CHOOSE AGAIN</button>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
        {hasVoted ? (<Link to="/logout" className="show-stats-btn">VOTE</Link>) : (<Link to="/logout" className="show-stats-btn" style={{ background:'#a8a8a8', pointerEvents:'none' }}>VOTE</Link>)}
        <div style={{ marginTop:60, position:'center' }}><span>_</span>
        </div>
        <Dashboard/>
        <div className="footer" style={{ position:'fixed' }}>
          <div>
            <img className="thumbnailgit" src="/gwpaw2021/github.png"/><a href="https://github.com/inplco/gwpaw2021" target="_">github.com/inplco/gwpaw2021</a>
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
