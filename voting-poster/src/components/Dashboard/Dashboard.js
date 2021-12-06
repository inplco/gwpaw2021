import React, { Component } from "react";
import * as Ably from "ably";
import { Doughnut } from "react-chartjs-2";
import '../../App.css';

/*
import {Chart, ArcElement} from 'chart.js';
Chart.register(ArcElement);
*/

let realTime = null;
let myVotingChannel = null;

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      votes: require("../init.json")
    };
  }
  /*
  state = {
    votes: {
      barcelona: 0,
      realMadrid: 0,
      juventus: 0,
    },
  };
  */
  componentDidMount() {
    realTime = new Ably.Realtime({ authUrl: "/subscribe" });
    realTime.connection.once("connected", () => {
      // create the channel object
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
      labels: this.state.votes,
      datasets: [
        {
          barPercentage: 1,
          data: this.state.votes,
        },
      ],
    };
    /*
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
    */
    return null;
  }
}

export default Dashboard;
