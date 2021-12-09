import React, { Component } from "react";

import "../../index.css";

class NameComponent extends React.Component {
  render() {
    return (
      <div
        className="nameComponent"
        onClick={() => this.props.handleClick(this.props._id)}>
        {this.props.name}
      </div>
    );
  }
}

export default NameComponent;
