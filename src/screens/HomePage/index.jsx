import React from "react";
import { Toolbar, IconButton, Tab, Divider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import { ThemeProvider } from "@material-ui/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Characters from "../charactersView";
import Episode from "../episodeView";
import Bar from "../../components/appBar";
import fire from "../../config/fireBase";
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  handleNavigate = (value) => {
    this.setState({
      value: value,
    });
  };
  logout = () => {
    localStorage.removeItem("email");
    fire.auth().signOut();
  };
  render() {
    const { value } = this.state;
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Bar />

        <Toolbar
          variant="fullwidth"
          active="true"
          value={value}
          style={{ justifyContent: "space-between" }}
        >
          <Tabs>
            <Tab
              value={value}
              style={{ color: "white", opacity: 1 }}
              label="Characters"
              onClick={(e) => this.handleNavigate(0)}
            />

            <Tab
              value={value}
              style={{ color: "white", opacity: 1 }}
              label="Episode"
              onClick={(e) => this.handleNavigate(1)}
            />
          </Tabs>
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={this.logout}
            style={{
              color: "white",

              overflow: "hidden",
              position: "relative",
            }}
          >
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>

        <Divider style={{ marginBottom: "4%" }} />

        <div>{value === 0 ? <Characters /> : null}</div>
        <div>{value === 1 ? <Episode /> : null}</div>
      </ThemeProvider>
    );
  }
}
export default Home;
