import React, { Component } from "react";
import ToolTips from "./ToolTips";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: true,
      left: false,
      right: false,
      bottom: false,
    };
  }

  changeStatetop = () => {
    console.log("Insidee top");
    this.setState({ top: true, left: false, right: false, bottom: false });
  };

  changeStateleft = () => {
    this.setState({ top: false, left: true, right: false, bottom: false });
  };

  changeStateright = () => {
    this.setState({ top: false, left: false, right: true, bottom: false });
  };

  changeStatebottom = () => {
    this.setState({ top: false, left: false, right: false, bottom: true });
  };

  render() {
    const { top, left, right, bottom } = this.state;
    return (
      <div>
        <div className="Text">Click On DropDown Button---🔻</div>
        <div className="dropdown">
          <button className="dropbtn" onClick={this.changestate}>
            Dropdown
          </button>
          <div className="dropdown-content">
            <ul className="dropdown-menu">
              <li className="li" onClick={this.changeStateleft}>
                {" "}
                left{" "}
              </li>
              <li className="li" onClick={this.changeStateright}>
                {" "}
                right{" "}
              </li>
              <li className="li" onClick={this.changeStatetop}>
                {" "}
                top{" "}
              </li>
              <li className="li" onClick={this.changeStatebottom}>
                {" "}
                bottom{" "}
              </li>
            </ul>
          </div>
        </div>

        {top && <ToolTips content="this is for ☝️" addClass="top" />}
        {left && <ToolTips content="this is for 👈" addClass="left" />}
        {right && <ToolTips content="this is for 👉" addClass="right" />}
        {bottom && <ToolTips content="this is for 👇" addClass="bottom" />}
      </div>
    );
  }
}
