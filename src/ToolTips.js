import React, { Component } from "react";

export default class ToolTips extends Component {
  render() {
    const { content, addClass } = this.props;
    return (
      <div className="tooltip">
        <button className="button button2">Press</button>
        <div className={addClass}>
          <h3>{content}</h3>
          <i></i>
        </div>
      </div>
    );
  }
}
