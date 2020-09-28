import React, { Component } from "react";
import { Typography, Grid, Button, Divider } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
export class Bar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="row" justify="space-between">
          <Typography className={classes.appbarTypography}>
            <b className={classes.breakingTypography}>Breaking</b>

            <b className={classes.badTypography}>Bad</b>
          </Typography>
        </Grid>
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles)(Bar);
