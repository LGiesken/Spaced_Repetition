import React, { Component } from "react";

class CounterComponent extends React.Component {
  render() {
    return (
      <div
        className="counterComponent"
        onClick={() => this.props.handleClick(this.props._id)}>
        {this.props.counter}
      </div>
    );
  }
}

export default CounterComponent;
