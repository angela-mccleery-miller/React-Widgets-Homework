import React, { Component } from "react";

export default class GrowShrink extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div
        className="widget-item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div>
          <TextResize defaultFontSize={26} minFontSize={14} maxFontSize={36}>
            <p>Grow Me</p>
            <h2
              style={{
                fontSize: `${
                  this.state.count === 0 ? "normal" : this.state.count
                }px`
              }}
            >
              {this.state.count}
            </h2>
          </TextResize>
        </div>
      </div>
    );
  }
}
