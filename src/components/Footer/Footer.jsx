import React, { Component } from "react";
import "./Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          Author: Towfik Hasan <br />
          <a href="mailto:tufikhasan05@gmail.com">tufikhasan05@gmail.com</a>
        </p>
      </div>
    );
  }
}

export default Footer;
