import React, { Component } from "react";
import "./App.scss";
import { Footer, Navbar, News } from "./components";

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News />
        <Footer />
      </>
    );
  }
}

export default App;
