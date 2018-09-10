/* eslint react/jsx-max-props-per-line: 0 */
/* eslint react/jsx-sort-props: 0 */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";

import { Users, Repositories, Login, Home } from "./containers";
import { NotFound } from "./components";

const Root = props => {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/github_app" component={Home} />
          <Route exact path="/github_app/_users" component={Users} />
          <Route
            exact
            path="/github_app/_repositories"
            component={Repositories}
          />
          <Route
            exact
            path="/github_app/_repos/:login"
            component={Repositories}
          />
          <Route exact path="/github_app/_login" component={Login} />
          <Route
            exact
            path="/github_app/_signin/callback"
            component={Repositories}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    </Router>
  );
};

export default Root;
