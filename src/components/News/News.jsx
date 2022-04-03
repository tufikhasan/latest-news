import React, { Component } from "react";
import "./News.scss";
import Newsitem from "../Newsitem/Newsitem";

export default class News extends Component {
  render() {
    return (
      <div className="app__news">
        <h2 className="head-text">
          Latest News - <span>Top Heading</span>
        </h2>
        <div className="app__wrapper">
          <Newsitem
            title="News one"
            description="description"
            source="source"
          />
          <Newsitem
            title="News one2"
            description="description2"
            source="source2"
          />
          <Newsitem
            title="News one3"
            description="description3"
            source="source3"
          />
          <Newsitem
            title="News one4"
            description="description4"
            source="source4"
          />
        </div>
      </div>
    );
  }
}
