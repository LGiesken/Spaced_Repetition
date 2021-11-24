import React, { Component } from "react";

class MenuBarComponent extends React.Component {
  render() {
    return (
      <div
        className={"menuBarComponent"}
        onClick={() => this.props.barClicked(this.props.id)}>
        {this.props.text}
      </div>
    );
  }
}

export default MenuBarComponent;
