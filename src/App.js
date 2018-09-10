/**
 * @author  Guillermo David Paredes Torrez, https://github.com/GuillermoParedes
 * @email  gdavid.ptorrez@gmail.com
 * @link    url goes here
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

import { Header } from "./components";

class App extends Component {
  render() {
    let { children } = this.props;
    return (
      <div ref="App" className="containerApp w-100">
        <Header />
        <br />
        <div className="container-fluid">{children}</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
