import React, { Component } from "react";

import image from "../images/plus-circle.svg";

class MenuButton extends React.Component {
  render() {
    return (
      <div>
        <img
          className="menuButton"
          src={image}
          onClick={() => this.props.handleButtonClick()}></img>
      </div>
    );
  }
}

export default MenuButton;
