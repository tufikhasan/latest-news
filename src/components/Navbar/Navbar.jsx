import React, { Component } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  render() {
    return (
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <Link to="/" className="logo-text">
            Latest <span>News</span>
          </Link>
        </div>
        <ul className="app__navbar-links">
          {[
            "home",
            "business",
            "entertainment",
            "health",
            "science",
            "sports",
            "technology",
          ].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <Link to={`/${item === "home" ? "" : item}`}>{item}</Link>
            </li>
          ))}
        </ul>
        <div className="app__navbar-mobile-menu">
          <HiMenuAlt4
            onClick={() => {
              this.setState({
                toggle: true,
              });
            }}
          />
          {this.state.toggle && (
            <motion.div
              whileInView={{ x: [220, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX
                onClick={() => {
                  this.setState({
                    toggle: false,
                  });
                }}
              />
              <ul>
                {[
                  "home",
                  "business",
                  "entertainment",
                  "health",
                  "science",
                  "sports",
                  "technology",
                ].map((item) => (
                  <li key={`link-${item}`}>
                    <Link to={`/${item === "home" ? "" : item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    );
  }
}
