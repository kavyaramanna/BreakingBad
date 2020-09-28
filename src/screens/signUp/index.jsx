import React from "react";
import logo from "../../assets/images/breakingBad1.jpg";
import {
  Grid,
  Button,
  InputAdornment,
  TextField,
  Hidden,
} from "@material-ui/core";
import "../../App.css";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import EmailIcon from "@material-ui/icons/Email";

import breakingBadImage from "../../assets/images/breakingBad2.jpg";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import fire from "../../config/fireBase";
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      data: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }
  handleClickShowPassword = () => {
    this.setState((state) => ({ showPassword: !state.showPassword }));
  };
  handleChange = (event) => {
    this.setState({
      ...this.state,

      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleregister = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(
        this.state.data.email,
        this.state.data.password
      )

      .catch((error) => {
        alert(error.message);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container direction="row" className={classes.container}>
        <Grid
          container
          item
          xs={12}
          md={6}
          justify="center"
          alignItems="center"
          className={classes.gridContainer}
        >
          <Hidden smUp>
            <img className={classes.imagexsGrid} src={logo} />
          </Hidden>
          <Hidden xsDown>
            <img className={classes.imageGrid} src={breakingBadImage} />
          </Hidden>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          item
          xs={12}
          md={6}
          className={classes.rightGrid}
        >
          <ThemeProvider theme={theme}>
            <form onSubmit={this.handleregister}>
              <Grid>
                <TextField
                  className={classes.inputField}
                  id="outlined-password-input"
                  name="firstName"
                  value={this.state.data.firstName}
                  onChange={this.handleChange}
                  label="First Name"
                  type="text"
                  autoComplete="current-password"
                  id="myfilled-name"
                  variant="outlined"
                />
              </Grid>

              <Grid>
                <TextField
                  fullWidth
                  className={classes.inputField}
                  id="outlined-password-input"
                  label="E-mail"
                  name="email"
                  value={this.state.data.email}
                  onChange={this.handleChange}
                  type="text"
                  autoComplete="current-password"
                  id="myfilled-name"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  fullWidth
                  className={classes.inputField}
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  type={this.state.showPassword ? "text" : "password"}
                  value={this.state.data.password}
                  onChange={this.handleChange}
                  autoComplete="current-password"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? (
                            <Visibility style={{ color: "#cfc0e7" }} />
                          ) : (
                            <VisibilityOff style={{ color: "#cfc0e7" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Button fullWidth type="submit" className={classes.buttonStyle}>
                SignUp
              </Button>
            </form>
          </ThemeProvider>
        </Grid>
      </Grid>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    navigateTo: (url) => dispatch(push(url)),
  };
};
const StyledSignUp = withStyles(styles)(SignUp);
export default connect(null, mapDispatchToProps)(StyledSignUp);
