import React from "react";
import { Button, Typography, makeStyles, Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const useStyles = makeStyles(() => ({
  mainBox: { margin: "50px 0 50px 0" },
  mainTitle: {
    flex: 1.5,
    margin: "40px 0 0 0",
    fontFamily: "'Tangerine', serif",
  },
  body1: {
    fontSize: 20,
    fontFamily: "'Tangerine', serif",
  },
  footer: { margin: "20px 0 0 0" },
  navigator: { margin: "0 10px 0 10px" },
}));

export const FollowMe = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const startOver = () => {
    navigate("/");
  };

  const { width, height } = useWindowSize();

  return (
    <Box>
      <Box className={classes.mainBox}>
        <Typography variant="body1" className={classes.body1} gutterBottom>
          <b>
            High fives to my amazing team for being such attentive listeners
            during my presentation! 🤝🏻
          </b>
        </Typography>
        <Typography variant="body1" className={classes.body1} gutterBottom>
          <b>You guys rock 👏🏻</b>
        </Typography>
        <Typography className={classes.mainTitle} variant="h4">
          Please follow me ➡️ on{" "}
          <a
            href="https://github.com/nawar-hisso"
            target="_blank"
            rel="noreferrer"
            style={{ decoration: "none", color: "black" }}
          >
            <b>Github</b>
          </a>
        </Typography>
      </Box>

      <Box className={classes.footer}>
        <Button
          className={classes.navigator}
          variant="contained"
          color="secondary"
          onClick={startOver}
        >
          Start over
        </Button>
      </Box>
      <Confetti width={width} height={height} />
    </Box>
  );
};
