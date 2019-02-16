import React, { Component } from "react";
import "./Badges.css";
import Team from "./Team.js";
import Chevron from "./Chevron.js";

class Badges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchLoaded: false,
      match: null
    };
  }
  render() {
    return this.state.matchLoaded ? (
      <div className="Badges">
        <Team team={this.state.match.competitors[0]} />
        <Chevron teams={this.state.match.competitors} />
        <Team team={this.state.match.competitors[1]} />
      </div>
    ) : (
      <h1>loading...</h1>
    );
  }

  async componentDidMount() {
    if (this.state.matchLoaded) {
      return;
    }

    const matchData = await fetch(
      "https://api.overwatchleague.com/live-match"
    ).then(res => res.clone().json());
    this.setState({
      match: matchData.data.liveMatch,
      matchLoaded: true
    });
  }
}

export default Badges;
