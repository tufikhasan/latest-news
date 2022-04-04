import React, { Component } from "react";
import "./News.scss";
import Newsitem from "../Newsitem/Newsitem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=824fba3880914e30accf0303f3427890";
    let data = await fetch(url);
    let reecivedData = await data.json();
    this.setState({
      articles: reecivedData.articles,
    });
  }
  render() {
    return (
      <div className="app__news">
        <h2 className="head-text">
          Latest News - <span>Top Heading</span>
        </h2>
        <div className="app__wrapper">
          {this.state.articles.map((news, index) => {
            return (
              <Newsitem
                key={index}
                imageUrl={news.urlToImage}
                title={`${news.title.slice(0, 55)}..`}
                description={news.description.slice(0, 88)}
                source={news.source.name}
                newsUrl={news.url}
                author={news.author}
                date={news.publishedAt}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
