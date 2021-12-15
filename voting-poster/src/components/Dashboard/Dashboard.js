import React, { Component } from "react";
import * as Ably from "ably";
import { Doughnut } from "react-chartjs-2";
import '../../App.css';
import '../Voting/voting.css';
import {Chart, ArcElement} from 'chart.js';

let realTime = null;
let myVotingChannel = null;

class Dashboard extends Component {
  constructor(){
    super();
    const posters = require("../init.json");
    var names = [];
    var count = [];
    for (var i=0; i < posters.length; i++) {
      names.push(posters[i].value)
      count.push(posters[i].votes)
      }
    var newarray = [],
    thing;
    for(var y = 0; y < names.length; y++){
      thing = {};
      for(var k = 0; k < count.length; k++){
          thing[names[y]] = count[k];
        }
        newarray.push(thing)
      }

    this.state = {
      votes: newarray
    };
    console.log(this.state);
  }
  componentDidMount() {
    realTime = new Ably.Realtime({ authUrl: "/subscribe" });
    realTime.connection.once("connected", () => {
      myVotingChannel = realTime.channels.get("voting-poster");
      myVotingChannel.subscribe("vote", (trigger) => {
        this.setState({
          votes: {
            ...this.state.votes,
            [trigger.data]: this.state.votes[trigger.data] + 1,
          },
        });
      });
    });
  }
  componentWillUnmount(){
    myVotingChannel.unsubscribe();
    realTime.connection.off();
  }
  render() {
    const data = {
      labels: this.state.votes.value,
      datasets: [
        {
          barPercentage: 1,
          data: this.state.votes.votes,
        },
      ],
    };

    const options = {
      title: {
        display: true,
        text: "Voting Dashboard",
        fontSize: 25,
        fontColor: "#FFFFFF",
        fontFamily: 'Rajdhani',
      },
      layout: {
        padding: {
          top: 50,
        }
      }
    };
    return <Doughnut className="graph" data={data} options={options} />;
  }
}

export default Dashboard;
