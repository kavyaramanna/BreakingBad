import React from "react";
import {
  Typography,
  Grid,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import styles from "./styles";
import CircularIndeterminate from "../../components/circularIndertiminate";
import Pagination from "@material-ui/lab/Pagination";
import { fetchCharacters } from "../../actions/fetchActions";
import { connect } from "react-redux";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],

      activePage: 1,

      rowsPerPage: 10,
      pageNumber: 1,
    };
  }
  componentDidMount() {
    this.props.fetchCharacters();
    console.log(this.state.characters);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      characters: nextProps.characters,
    });
    {
      localStorage.setItem("characters", JSON.stringify(nextProps.characters));
    }
  }
  handlePageChange = (event, pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({
      activePage: pageNumber,
    });
  };
  render() {
    const { characters } = this.state;
    const { classes } = this.props;

    // const indexOfLastPost = this.state.activePage * this.state.rowsPerPage;
    // const indexOfFirstPost = indexOfLastPost - this.state.rowsPerPage;
    // const currentPosts = this.state.rows.slice(
    //   indexOfFirstPost,
    //   indexOfLastPost
    // );
    // console.log(currentPosts);
    return (
      <div>
        <ThemeProvider theme={theme}>
          {characters.length !== 0 ? (
            <>
              {characters.map((item, i) => (
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
                                <b>{item.name}</b>
                              </Typography>
                            </Grid>
                            <Grid container direction="row" item xs={5}>
                              <Grid>
                                <Typography
                                  className={classes.gridHeadingTypography}
                                >
                                  Portrayed:
                                </Typography>
                              </Grid>
                              <Grid>
                                <Typography className={classes.gridTypography}>
                                  {item.portrayed}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Grid container direction="row">
                            <Grid item xs={12} md={4}>
                              <img
                                className={classes.cardMedia}
                                src={item.img}
                                alt="image loading..."
                              ></img>
                            </Grid>
                            <Grid item xs={12} md={8} direction="column">
                              <Grid
                                container
                                direction="row"
                                className={classes.gridContent}
                              >
                                <Typography
                                  className={classes.gridHeadingTypography}
                                >
                                  NickName:
                                </Typography>

                                <Typography className={classes.gridTypography}>
                                  {item.nickname}
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
                                  Date Of Birth:
                                </Typography>

                                <Typography className={classes.gridTypography}>
                                  {item.birthday}
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
                                  Occupation:
                                </Typography>

                                <Typography className={classes.gridTypography}>
                                  {"[" + item.occupation + "]"}
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
                                  Appearance:
                                </Typography>

                                <Typography className={classes.gridTypography}>
                                  {item.appearance + ","}
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
                                  Category:
                                </Typography>

                                <Typography className={classes.gridTypography}>
                                  {item.category}
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
                                  Better Call saul:
                                </Typography>

                                <Typography className={classes.gridTypography}>
                                  {"[" + item.better_call_saul_appearance + "]"}
                                </Typography>
                              </Grid>
                              <Grid
                                container
                                alignItems="flex-start"
                                justify="flex-start"
                                direction="row"
                                className={classes.gridContent}
                              >
                                <Typography
                                  className={classes.gridHeadingTypography}
                                >
                                  Status:
                                </Typography>

                                <Typography className={classes.gridTypography}>
                                  {item.status}
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
            </div>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCharacters: (data) => dispatch(fetchCharacters(data)),
  };
}
const mapStateToProps = (state) => ({
  characters: state.mainReducer.characters,
});
const StyledCharacters = withStyles(styles)(Characters);
export default connect(mapStateToProps, mapDispatchToProps)(StyledCharacters);
