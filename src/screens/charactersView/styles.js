const styles = (theme) => ({
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
  expansionPaper: {
    width: "70vw",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
    },
  },
  cardMedia: {
    width: "90%",

    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
  gridContent: {
    marginTop: theme.spacing(3),
  },
  gridnameTypography: {
    fontFamily: "Courier",
    fontSize: "22px",
    fontWeight: "bold",
    opacity: 1,
  },
  gridHeadingTypography: {
    fontFamily: "Courier",
    fontSize: "20px",
    fontWeight: "bold",
  },
  gridTypography: {
    fontFamily: "Courier",
    fontSize: "20px",
    fontWeight: "bold",
    opacity: 0.8,
  },
});
export default styles;
