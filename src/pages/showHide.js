import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0
    };
  }
  handleCrementer = increment => {
    this.setState({
      count: this.state.count + increment
    });
  };
  render() {
    return (
      <div className="App">
        <div>
          <p>Hide Me</p>
          <button onClick="myFunction()">Click Me</button>

          <button onClick={() => this.handleCrementer(+5)}>Grow</button>
          <button onClick={() => this.handleCrementer(-5)}>Shrink</button>
        </div>
      </div>
    );
  }
}
