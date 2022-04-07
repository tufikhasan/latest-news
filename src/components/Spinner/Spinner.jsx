import React, { Component } from "react";
import loader from "./Spinner.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="app__wrapper">
        <img src={loader} alt="Loading..." />
      </div>
    );
  }
}
