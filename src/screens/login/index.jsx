import React from "react";
import logo from "../../assets/images/breakingBad1.jpg";
import {
  Grid,
  Button,
  Link,
  InputAdornment,
  TextField,
  Typography,
  Hidden,
  IconButton,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../../App.css";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import EmailIcon from "@material-ui/icons/Email";
import CloseIcon from "@material-ui/icons/Close";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import appUrls from "../../config/appUrls";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import fire from "../../config/fireBase";
import breakingBad from "../../assets/images/breakingBadLogo2.jpg";
import breakingBadImage from "../../assets/images/breakingBad2.jpg";
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: "",
      password: "",
      dialogueEmail: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };
  handleRecover = (e) => {
    fire
      .auth()
      .sendPasswordResetEmail(this.state.dialogueEmail)
      .then(function (user) {
        alert("Please check your email...");
      })
      .catch(function (e) {
        console.log(e);
      });
  };
  handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", this.state.email);
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        alert(error.message);
      });
  };
  handleNavigateSignUp = () => {
    this.props.navigateTo(appUrls.SIGNUP_URL);
  };
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClickClose = () => {
    this.setState({
      open: false,
    });
  };
  handleClickShowPassword = () => {
    this.setState((state) => ({ showPassword: !state.showPassword }));
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="row">
        <Grid
          container
          direction="column"
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
            <form onSubmit={this.handleLogin}>
              <Hidden smDown>
                <img
                  src={breakingBad}
                  style={{
                    width: "100%",
                    marginLeft: "2%",
                    marginBottom: "5%",
                    marginTop: "7%",
                  }}
                />
              </Hidden>
              <Grid>
                <TextField
                  className={classes.inputField}
                  id="outlined-password-input"
                  label="E-mail"
                  name="email"
                  value={this.state.email}
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
                  className={classes.inputField}
                  id="outlined-password-input"
                  label="Password"
                  name="password"
                  type={this.state.showPassword ? "text" : "password"}
                  onChange={this.handleChange}
                  value={this.state.password}
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
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Button fullWidth type="submit" className={classes.buttonStyle}>
                SignIn
              </Button>

              <Typography
                className={classes.signUpTypography}
                onClick={this.handleNavigateSignUp}
              >
                New User?<Link style={{ color: "white" }}>SignUp</Link>
              </Typography>

              <Link
                className={classes.signUpTypography}
                onClick={this.handleClickOpen}
              >
                Forgot Password?
              </Link>
            </form>
            <Dialog open={this.state.open}>
              <DialogTitle id="alert-dialog-title">
                <b> Recover Password</b>
                <IconButton
                  key="close"
                  aria-label="close"
                  color="inherit"
                  onClick={this.handleClickClose}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Please Enter your Email-Id here
                </DialogContentText>
                <TextField
                  id="outlined-password-input"
                  label="E-mail"
                  name="dialogueEmail"
                  onChange={this.handleChange}
                  value={this.state.dialogueEmail}
                  type="text"
                  autoComplete="current-password"
                  id="myfilled-name"
                  variant="outlined"
                />
              </DialogContent>

              <Grid item xs={12} className={classes.DialogBox}>
                <DialogActions>
                  <Grid>
                    <Button onClick={this.handleRecover}>
                      Send me reset Link
                    </Button>
                  </Grid>
                </DialogActions>
              </Grid>
            </Dialog>
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
const StyledLogin = withStyles(styles)(Login);
export default connect(null, mapDispatchToProps)(StyledLogin);
