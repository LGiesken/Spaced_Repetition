import React, { Component } from "react";

import ContentComponent from "./contentComponent";
import MenuComponent from "./menuComponent";

class FrontPage extends React.Component {
  render() {
    return (
      <div>
        <ContentComponent />
        <MenuComponent />
      </div>
    );
  }
}

export default FrontPage;
