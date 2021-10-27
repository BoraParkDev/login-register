import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Login.scss";
import Login from "./Login";
import Register from "./Register";

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/Register" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
