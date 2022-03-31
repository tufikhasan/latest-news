import React, { Component } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

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
          <a href="/" className="logo-text">
            Latest <span>News</span>
          </a>
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "work", "skills", "testimonial", "contact"].map(
            (item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`/${item}`}>{item}</a>
              </li>
            )
          )}
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
                  "about",
                  "work",
                  "testimonial",
                  "skills",
                  "contact",
                ].map((item) => (
                  <li key={`link-${item}`}>
                    <a href={`/${item}`}>{item}</a>
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
