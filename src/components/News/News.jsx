import React, { Component } from "react";
import "./News.scss";
import Newsitem from "../Newsitem/Newsitem";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";

export default class News extends Component {
  static defaultProps = {
    pageSize: 4,
    country: "us",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: "",
      loading: false,
    };
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=824fba3880914e30accf0303f3427890&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let reecivedData = await data.json();
    this.setState({
      articles: reecivedData.articles,
      totalResults: reecivedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevBtn = async () => {
    this.updateNews();
    this.setState({
      page: this.state.page - 1,
    });
  };
  handleNextBtn = async () => {
    this.updateNews();
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      this.setState({
        page: this.state.page + 1,
      });
    }
  };
  render() {
    return (
      <>
        <div className="app__news">
          <h2 className="head-text">
            Latest News - <span>Top Heading</span>
          </h2>
          {this.state.loading && (
            <div className="app__wrapper">
              <Spinner />
            </div>
          )}
          <div className="app__wrapper">
            {this.state.articles.map((news, index) => {
              return (
                <Newsitem
                  key={index}
                  imageUrl={news.urlToImage}
                  title={`${news.title.slice(0, 55)}..`}
                  description={
                    news.description ? news.description.slice(0, 88) : ""
                  }
                  source={news.source.name}
                  newsUrl={news.url}
                  author={news.author}
                  date={news.publishedAt}
                />
              );
            })}
          </div>
        </div>
        <div className="pagination">
          <button
            className="app__btns_primary"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevBtn}
          >
            Previus
          </button>
          <button
            className="app__btns_primary"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextBtn}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
