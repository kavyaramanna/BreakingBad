const styles = (theme) => ({
  loginBox: {
    padding: theme.spacing(5),
    borderRadius: "10px",
  },
  gridContainer: {
    height: "100%",
  },
  imageGrid: {
    width: "100%",
    height: "90vh",
    marginTop: theme.spacing(6),
  },
  imagexsGrid: {
    width: "55%",
    marginTop: theme.spacing(4),
  },
  inputField: {
    width: "100%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },

  buttonStyle: {
    color: "white",
    backgroundColor: "#ffbf00",
    borderRadius: "15px",
    padding: "10px",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#1a8dff",
    },
  },
  signUpTypography: {
    color: "white",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(7),
    marginBottom: theme.spacing(2),
  },
});
export default styles;
