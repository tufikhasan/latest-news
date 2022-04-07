import React, { Component } from "react";
import "./App.scss";
import { Footer, Navbar, News } from "./components";
import { Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="home" pageSize={8} />} />
          <Route
            path="/home"
            element={
              <News
                key="general"
                pageSize={8}
                country="us"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key="business"
                pageSize={8}
                country="us"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={8}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News key="health" pageSize={8} country="us" category="health" />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key="science"
                pageSize={8}
                country="us"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News key="sports" pageSize={8} country="us" category="sports" />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={8}
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
