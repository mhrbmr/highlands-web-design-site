import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  "@global": {
  ul: {
    margin: 0,
    padding: 0,
    listStyle: "none"
  }
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textTransform: "capitalize"
  },
  linkButton: {
    margin: theme.spacing(1, 1.5),
    textTransform: "capitalize",
    fontFamily: "Cabin",
    width: "10rem"
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    paddingTop: '20px'
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(1),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    }
  }
}));

export default useStyles