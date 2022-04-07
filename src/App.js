import React, { Component } from "react";
import "./App.scss";
import { Footer, Navbar, News } from "./components";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <>
        <LoadingBar
          color="var(--secondary-color)"
          progress={this.state.progress}
          height={5}
        />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News setProgress={this.setProgress} key="home" pageSize={8} />
            }
          />
          <Route
            path="/home"
            element={
              <News
                setProgress={this.setProgress}
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
                setProgress={this.setProgress}
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
                setProgress={this.setProgress}
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
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={8}
                country="us"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
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
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={8}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
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
