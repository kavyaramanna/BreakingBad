import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: "0",
    left: "0",
    height: "100vh",
    width: "100vw",
  },
};

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <CircularProgress thickness={4} style={{ color: "#ffbf00" }} />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
