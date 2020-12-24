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
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchEpisodes } from "../../actions/fetchActions";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
class Episode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: [],

      activePage: 1,

      rowsPerPage: 10,
      pageNumber: 1,
    };
  }
  componentDidMount() {
    this.props.fetchEpisodes();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      episodes: nextProps.episodes,
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
    const { episodes } = this.state;

    // const indexOfLastPost = this.state.activePage * this.state.rowsPerPage;
    // const indexOfFirstPost = indexOfLastPost - this.state.rowsPerPage;
    // const currentPosts = this.state.episodes.slice(
    //   indexOfFirstPost,
    //   indexOfLastPost
    // );
    // console.log(currentPosts);
    return (
      <div>
        <ThemeProvider theme={theme}>
          {episodes.length !== 0 ? (
            <>
              {" "}
              {episodes.map((item, i) => (
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
                              <Typography
                                className={classes.gridnameTypography}
                              >
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
            </>
          ) : (
            <CircularIndeterminate />
          )}
        </ThemeProvider>

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
              {/* {console.log(this.state.count)} */}
            </div>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchEpisodes: (data) => dispatch(fetchEpisodes(data)),
  };
}

// Episode.propTypes = {
//   fetchEpisodes: PropTypes.func.isRequired,

// };
const mapStateToProps = (state) => ({
  episodes: state.mainReducer.episodes,
});
const StyledEpisodes = withStyles(styles)(Episode);
export default connect(mapStateToProps, mapDispatchToProps)(StyledEpisodes);
// export default connect(mapStateToProps, { fetchEpisodes })(
//   compose(withStyles(styles))(Episode)
// );
