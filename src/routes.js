import React from "react";
import isAuthenticated from "./Utils/auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// COMPONENTS
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Hello world!</h1>} />
      <PrivateRoute
        exact
        path="/new"
        component={() => <h1>User is authenticated!</h1>}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
