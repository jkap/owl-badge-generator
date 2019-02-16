import React, { Component } from "react";
import "./Team.css";

class Team extends Component {
  render() {
    return (
      <div
        className="Team"
        style={{
          backgroundColor: `#${this.props.team.primaryColor}`
        }}
      >
        <img src={this.props.team.icon} alt={`${this.props.team.name} logo`} />
      </div>
    );
  }
}

export default Team;
