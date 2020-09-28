const styles = (theme) => ({
  appbarTypography: {
    color: "white",
    margin: theme.spacing(2),
  },
  breakingTypography: {
    fontSize: "35px",
    color: "#ffbf00",
  },
  badTypography: {
    fontSize: "40px",
    color: "#1a8dff",
    marginLeft: theme.spacing(1),
  },
  buttonStyle: {
    color: "white",
    fontSize: "12px",
    height: "5vh",
    float: "right",
    backgroundColor: "#ffbf00",
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(5),
    borderRadius: "8px",
    padding: "15px",
    "&:hover": {
      backgroundColor: "#1a8dff",
    },
  },
});
export default styles;
