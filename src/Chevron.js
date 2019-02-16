import React, { Component } from "react";
import "./Chevron.css";

class Chevron extends Component {
  render() {
    return (
      <div
        className="Chevron"
        style={{
          borderTopColor: `#${this.props.teams[0].primaryColor}`,
          backgroundColor: `#${this.props.teams[1].primaryColor}`
        }}
      />
    );
  }
}

export default Chevron;
