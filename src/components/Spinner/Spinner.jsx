import React, { Component } from "react";
import loader from "./Spinner.gif";

export default class Spinner extends Component {
  render() {
    return <img src={loader} alt="Loading..." />;
  }
}
