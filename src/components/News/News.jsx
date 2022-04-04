import React, { Component } from "react";
import "./News.scss";
import Newsitem from "../Newsitem/Newsitem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "KCRA Sacramento",
      },
      author: "Jonathan Ayestas",
      title:
        "Sac City Unified students to return to class Monday after strike ends - KCRA Sacramento",
      description:
        "Sacramento City Unified teachers and support staff on Sunday have ended their strike that lasted 12 days and resulted in students missing eight days of instruction.",
      url: "https://www.kcra.com/article/sac-city-unified-students-return-class-strike-ends/39621519",
      urlToImage:
        "https://kubrick.htvapps.com/vidthumb/478d339c-5caf-45c7-a9f9-3ebaa9f4ed67/478d339c-5caf-45c7-a9f9-3ebaa9f4ed67_image.jpg?crop=0.762xw:0.762xh;0.126xw,0&resize=1200:*",
      publishedAt: "2022-04-04T05:38:00Z",
      content:
        "SACRAMENTO, Calif. —Sacramento City Unified teachers and support staff on Sunday have reached an agreement and ended their strike that lasted 12 days and resulted in students missing eight days of in… [+2129 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Sandra Gonzalez",
      title: "Grammy Awards 2022: All the highlights - CNN",
      description:
        'It was a big night for three artists in particular, who walked away with the night\'s four biggest honors. Jon Batiste won album of the year for "We Are," Silk Sonic won record and song of the year for "Leave the Door Open" and Olivia Rodrigo won best new arti…',
      url: "https://www.cnn.com/2022/04/03/entertainment/grammy-awards-highlights/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/220403234642-40a-grammy-awards-2022.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-04-04T04:54:00Z",
      content:
        "Grammy Awards host Trevor Noah set up expectations moments into Sunday nights show: Musics biggest night is essentially one big concert where awards happen to be given out. \r\nIt was that, but because… [+3795 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Costa Rica elects maverick Chaves as president in break with establishment - Reuters Canada",
      description:
        "Anti-establishment economist Rodrigo Chaves clinched Costa Rica's presidency on Sunday, upending decades of political consensus in the Central American country that is grappling with growing social discontent and mounting national debt.",
      url: "https://www.reuters.com/world/americas/costa-ricans-choose-between-outsider-former-leader-presidential-vote-2022-04-03/",
      urlToImage:
        "https://www.reuters.com/resizer/_JV9k4_KwEz-nZvS03vfXbe5raQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/75NVLQAFXFKIZOGVVPOLOBKNLQ.jpg",
      publishedAt: "2022-04-04T04:32:00Z",
      content:
        "SAN JOSE, April 3 (Reuters) - Anti-establishment economist Rodrigo Chaves clinched Costa Rica's presidency on Sunday, upending decades of political consensus in the Central American country that is g… [+3774 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title:
        "1 killed, 11 wounded in shooting at Dallas outdoor concert - CBS News",
      description:
        "One victim is in critical condition, the rest are in stable condition.",
      url: "https://www.cbsnews.com/news/dallas-shooting-outdoor-concert/",
      urlToImage:
        "https://cbsnews2.cbsistatic.com/hub/i/r/2022/04/03/a66a90c4-115b-4015-9ec9-ecc419d616f1/thumbnail/1200x630/5ab0a4c6d64ce0f68fb9ebfc5f41ad60/dallas-concert-shooting-2022-04-03.png",
      publishedAt: "2022-04-04T03:39:00Z",
      content:
        "One person was killed and 11 others were injured during a shooting at an outdoor concert in Dallas, police said. The shooting took place around 12:13 a.m. on Sunday in southeast Dallas, police said i… [+2053 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
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
                title={news.title}
                description={news.description}
                source={news.source.name}
                newsUrl={news.url}
                author={news.author}
                date={news.date}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
