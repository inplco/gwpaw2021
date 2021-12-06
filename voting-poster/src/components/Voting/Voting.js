import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import * as Ably from "ably";
import "./voting.css";
import Dashboard from '../Dashboard/Dashboard';
import Logout from '../Logout/Logout';
import '../../App.css';

const store = require('../store.json');

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
      <div className="main-container" style={{ marginTop:-125 }}>
        <h1 className="voting-heading" style={{ fontFamily: 'palatino', marginTop:0 }}>Vote for your favourite Poster</h1>
        <div className="logout" style={{ marginTop:-75 }}>
        <Link to="/logout" className="show-stats-btn">
          SUBMIT & LOG OUT
        </Link>
        </div>
        <div style={{ marginTop: 55, marginLeft: 200, marginRight: 200 }}>
        <p style={{ fontWeight: 500 }}>NOTE:<br></br> Please vote for your poster and click on 'SUBMIT & LOG OUT'. Once you have voted and logged out, your vote will be permanently registered and cannot be altered. You will not be able to login again into this portal once your vote has been registered.</p>
        </div>
        <div className="voting-body" style={{ marginTop:100, marginLeft:100, marginRight:100 }}>
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
                    <div className="back">Thanks for voting!</div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
        <div style={{ marginTop:-30 }}>
        </div>
        <button className="refresh-btn" onClick={()=>this.setState({flipped:null})}>CHOOSE AGAIN</button>
        <div style={{ marginTop:10 }}>
        <span>THIS WILL OVERTURN YOUR PREVIOUS CHOICE</span>
        </div>
        <Dashboard/>
        <div className="footer">
          <p>Powered by <a href="http://inpl.one" target = "_">Interplanetary Company</a><sup>TM</sup></p>
        </div>
        <br></br>
      </div>
      </React.Fragment>
    );
  }
}

export default Voting;
