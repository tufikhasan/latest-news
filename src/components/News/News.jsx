import React, { Component } from "react";
import "./News.scss";
import Newsitem from "../Newsitem/Newsitem";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    pageSize: 4,
    country: "us",
    category: "general",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: true,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category === "general" ? "home" : this.props.category
    )} - Latest News`;
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=824fba3880914e30accf0303f3427890&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
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

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };
  render() {
    return (
      <>
        <div className="app__news">
          <h2 className="head-text">
            News -
            <span>
              {" "}
              Top {this.props.category === "general"
                ? ""
                : this.props.category}{" "}
              Heading
            </span>
          </h2>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="app__wrapper">
              {!this.state.loading &&
                this.state.articles.map((news, index) => {
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
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
