import React, { Component } from 'react'
import './News.scss';
import Newsitem from '../Newsitem/Newsitem'

export default class News extends Component {

  render() {
    return (
      <>
        News
        <Newsitem />
        <Newsitem />
        <Newsitem />
      </>
    )
  }
}
