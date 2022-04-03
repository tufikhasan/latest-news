import React, { Component } from "react";
import "./Newsitem.scss";

export default class Newsitem extends Component {
  render() {
    let { imageUrl, title, description, source, newsUrl, author, date } =
      this.props;
    return (
      <div className="app__news-item app__flex">
        <div className="app__news-img app__flex">
          <img
            src={
              !imageUrl
                ? "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/223LNQCYDYI6ZGQYUUDM6OVDDU.jpg&w=1440"
                : imageUrl
            }
            alt={title}
          />
        </div>
        <div className="app__news-content">
          <h4 className="bold-text">{title}</h4>
          <p className="p-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toLocaleString()}
            </small>
          </p>
          <p className="p-text des" style={{ marginTop: 5 }}>
            {description}
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="app__btns_primary"
          >
            Read more
          </a>
          <div className="app__news-tag app__flex">
            <p className="p-text">{source}</p>
          </div>
        </div>
      </div>
    );
  }
}
