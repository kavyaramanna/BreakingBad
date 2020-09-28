import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import appUrls from "../config/appUrls";
import SignUp from "../screens/signUp";
import Login from "../screens/login";
import LandingPage from "../screens/index";
const Routing = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={LandingPage} />
      <Route path={appUrls.LOGIN_URL} component={Login} />
      <Route path={appUrls.SIGNUP_URL} component={SignUp} />
    </Switch>
  );
};
export default Routing;
