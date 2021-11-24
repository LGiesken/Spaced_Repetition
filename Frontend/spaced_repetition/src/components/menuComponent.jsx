import React, { Component } from "react";

import MenuButton from "./menuButton";
import MenuBar from "./menuBar";
import "../index.css";

class MenuComponent extends React.Component {
  state = {
    showBar: false,
  };

  handleButtonClick = () => {
    console.log("Clicked", this.state.showBar);

    if (this.state.showBar) {
      this.setState({ showBar: false });
    } else {
      this.setState({ showBar: true });
    }
  };

  handleBarClick = (text) => {
    console.log("clicked!", text);
  };

  toggleBar = () => {};

  render() {
    const showBar = this.state.showBar;
    let menuBar;
    if (showBar) {
      menuBar = (
        <MenuBar className="menuBar" barClicked={this.handleBarClick}></MenuBar>
      );
    } else {
      menuBar = null;
    }
    return (
      <div className={"menuComponent"}>
        {menuBar}
        <MenuButton
          className="menuButton"
          handleButtonClick={this.handleButtonClick}></MenuButton>
      </div>
    );
  }
}

export default MenuComponent;
