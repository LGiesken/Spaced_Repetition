import React, { Component } from "react";

import "../index.css";
import MenuBarComponent from "./menuBarComponent";

class MenuBar extends React.Component {
  render() {
    return (
      <div>
        <div className="menuBarFrame">
          <MenuBarComponent
            text="Neues Fach"
            barClicked={this.props.barClicked}
            id="topic"
          />
        </div>
        <div className="menuBarFrame">
          <MenuBarComponent
            text="Neue Frage"
            barClicked={this.props.barClicked}
            id="question"
          />
        </div>
      </div>
    );
  }
}

export default MenuBar;
