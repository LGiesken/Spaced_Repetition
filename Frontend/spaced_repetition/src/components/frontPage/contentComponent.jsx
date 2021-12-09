import React, { Component } from "react";

import { getTopics } from "../../services/fakeTopicService";
import { getCounters } from "../../services/fakeCounterService";
import "../../index.css";
import NameComponent from "./nameComponent";
import CounterComponent from "./counterComponent";

class ContentComponent extends React.Component {
  state = { topics: [], counters: [] };

  componentDidMount() {
    const topics = getTopics();
    const counters = getCounters();

    this.setState({ topics, counters });
  }

  handleClick(id) {
    return null;
  }

  getCounter(_id) {
    let counter = this.state.counters.find((counter) => counter._id === _id);
    if (counter.counter > 0) {
      return <CounterComponent counter={counter.counter} />;
    }
  }

  getName(_id) {
    let topic = this.state.topics.find((topic) => topic._id === _id);
    return topic.name;
  }

  getContentComponent(counter) {
    if (counter.counter === 0) {
      return null;
    }

    return (
      <div key={counter._id} className="contentComponent">
        <NameComponent
          key={counter._id + "_name"}
          _id={counter._id}
          name={this.getName(counter._id)}
          handleClick={this.handleClick}
        />
        <CounterComponent
          key={counter._id + "_counter"}
          _id={counter._id}
          counter={counter.counter}
          handleClick={this.handleClick}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="contentContainer">
        {this.state.counters.map((counter) =>
          this.getContentComponent(counter)
        )}
      </div>
    );
  }
}

export default ContentComponent;
