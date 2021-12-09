import React, { Component } from "react";

import MenuButton from "./menuButton";
import MenuBar from "./menuBar";
import "../../index.css";

class MenuComponent extends React.Component {
  state = {
    showBar: false,
  };

  handleButtonClick = () => {
    // handles clicks on + sign (hides or shows the menuBar)
    if (this.state.showBar) {
      this.setState({ showBar: false });
    } else {
      this.setState({ showBar: true });
    }
  };

  handleBarClick = (text) => {
    // handles clicks on "Neues Fach" or "Neue Frage"
    return null;
  };

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
