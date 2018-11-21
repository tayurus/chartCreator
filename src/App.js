import React, { Component } from "react";

import "./App.css";

import { Router, Route } from "react-router-dom";

import { history } from "./helpers";

import { MainPage } from "./pages";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/" component={MainPage} />
          </div>
        </Router>
      </div>
    );
  }
}
