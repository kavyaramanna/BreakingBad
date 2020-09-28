import React, { Component } from "react";
import Login from "./login";
import Home from "./HomePage";
import fire from "../config/fireBase";
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authlistener();
  }
  authlistener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return <div>{this.state.user ? <Home /> : <Login />}</div>;
  }
}
export default LandingPage;
