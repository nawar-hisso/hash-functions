import React from "react";
import { Button, Typography, makeStyles, Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainBox: { margin: "50px 0 50px 0" },
  mainTitle: { flex: 1.5, margin: 15, fontFamily: "'Tangerine', serif" },
  body1: {
    fontSize: 20,
    fontFamily: "'Tangerine', serif",
  },
  footer: { margin: "20px 0 0 0" },
  navigator: { margin: "0 10px 0 10px" },
}));

export const HowItsWorking = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const next = () => {
    navigate("/what-are-their-properties");
  };

  const previous = () => {
    navigate("/");
  };

  return (
    <Box>
      <Box className={classes.mainBox}>
        <Typography className={classes.mainTitle} variant="h4">
          🔍 How do Hash Functions Work?
        </Typography>
        <Typography variant="body1" className={classes.body1} gutterBottom>
          Hash functions work by taking an input data and processing it through
          a series of complex mathematical operations 🧶 to produce a hash
          value.
        </Typography>
        <Typography variant="body1" className={classes.body1} gutterBottom>
          The output hash value is always the same length, regardless of the
          size of the input data.
        </Typography>
      </Box>
      <Box>
        <img alt="Hashing algorithm" src="images/howItsWorking.png" />
      </Box>
      <Box className={classes.footer}>
        <Button
          variant="contained"
          className={classes.navigator}
          color="primary"
          onClick={previous}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          className={classes.navigator}
          color="primary"
          onClick={next}
        >
          What are their properties?
        </Button>
      </Box>
    </Box>
  );
};
