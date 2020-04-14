import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";
import PlusMinus from "./pages/addSub.js";
import ToggleMe from "./pages/toggle.js";
import HideMe from "./pages/showHide.js";
// import "./pages/growShrink.js";
// import "./pages/textMover.js";
// import "./pages/tellTime.js";
// import "./pages/colorChanger.js";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            {/* <NavigationContainer /> */}

            <Switch>
              <Route path="/addSub" component={PlusMinus} />
              <Route path="/toggle" component={ToggleMe} />
              <Route path="/showHide" component={HideMe} />
              {/* <hr />
              <Route path="/growShrink" component={WatchMeGrow} />
              <hr />
              <Route path="/textMover" component={MoveMeAround} />
              <hr />
              <Route path="/tellTime" component={Clock} />
              <hr />
              <Route path="/colorChanger" component={ColorChange} />
              <hr /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
