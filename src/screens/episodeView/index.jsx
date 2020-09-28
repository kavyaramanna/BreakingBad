import React from "react";
import {
  Typography,
  Button,
  Grid,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CircularIndeterminate from "../../components/circularIndertiminate";
import Pagination from "@material-ui/lab/Pagination";
import styles from "./styles";
import fire from "../../config/fireBase";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
class Episode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      loaded: false,
      activePage: 1,

      rowsPerPage: 10,
      pageNumber: 1,
    };
  }
  componentDidMount() {
    this.setState({
      ...this.state,
      loaded: true,
    });
    axios
      .get("https://www.breakingbadapi.com/api/episodes")
      .then((response) => {
        this.setState({
          ...this.state,
          rows: response.data,
          totalCount: response.data.length,
          loaded: false,
        });
      });
  }
  handlePageChange = (event, pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({
      activePage: pageNumber,
    });
  };
  logout = () => {
    localStorage.removeItem("email");
    fire.auth().signOut();
  };
  render() {
    const { classes } = this.props;

    const indexOfLastPost = this.state.activePage * this.state.rowsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.rowsPerPage;
    const currentPosts = this.state.rows.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    console.log(currentPosts);
    return (
      <div>
        {this.state.loaded ? (
          <CircularIndeterminate />
        ) : (
          <ThemeProvider theme={theme}>
            {currentPosts.map((item, i) => (
              <Grid container direction="row">
                <Grid item xs>
                  <Paper className={classes.expansionPaper}>
                    <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Grid container direction="row">
                          <Grid item xs>
                            <Typography className={classes.gridnameTypography}>
                              <b>{item.title}</b>
                            </Typography>
                          </Grid>
                        </Grid>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid container direction="row">
                          <Grid item xs={12} direction="column">
                            <Grid
                              container
                              direction="row"
                              className={classes.gridContent}
                            >
                              <Typography
                                className={classes.gridHeadingTypography}
                              >
                                Series:
                              </Typography>

                              <Typography className={classes.gridTypography}>
                                {item.series}
                              </Typography>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              className={classes.gridContent}
                            >
                              <Typography
                                className={classes.gridHeadingTypography}
                              >
                                Season:
                              </Typography>

                              <Typography className={classes.gridTypography}>
                                {item.season}
                              </Typography>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              className={classes.gridContent}
                            >
                              <Typography
                                className={classes.gridHeadingTypography}
                              >
                                Episode:
                              </Typography>

                              <Typography className={classes.gridTypography}>
                                {item.episode}
                              </Typography>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              className={classes.gridContent}
                            >
                              <Typography
                                className={classes.gridHeadingTypography}
                              >
                                Characters:
                              </Typography>

                              <Typography className={classes.gridTypography}>
                                {item.characters + ","}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </Paper>
                </Grid>
              </Grid>
            ))}
          </ThemeProvider>
        )}
        <ThemeProvider>
          <Grid container direction="row" justify="center" alignItems="center">
            <div className={classes.paginationalign}>
              <Grid item xs={12}>
                <Pagination
                  activePage={this.state.activePage}
                  count={Math.ceil(
                    this.state.totalCount / this.state.rowsPerPage
                  )}
                  rowsPerPage={this.state.rowsPerPage}
                  onChange={this.handlePageChange}
                  variant="outlined"
                  shape="rounded"
                  color="standard"
                  alignItems="left"
                  component="div"
                ></Pagination>
              </Grid>
              {console.log(this.state.count)}
            </div>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}
export default withStyles(styles)(Episode);
