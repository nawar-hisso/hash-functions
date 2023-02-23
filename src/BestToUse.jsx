import React from "react";
import { Button, Typography, makeStyles, Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  mainBox: { margin: "50px 0 50px 0" },
  mainTitle: { flex: 1.5, margin: 15, fontFamily: "'Tangerine', serif" },
  body1: {
    fontSize: 20,
    fontFamily: "'Tangerine', serif",
  },
  footer: { margin: "20px 0 0 0" },
  navigator: { margin: "0 10px 0 10px" },
}));

export const BestToUse = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const finish = () => {
    navigate("/follow-me");
  };

  return (
    <Box>
      <Box className={classes.mainBox}>
        <Typography className={classes.mainTitle} variant="h4">
          ✅ What is the best function to use?
        </Typography>
        <Typography variant="body1" className={classes.body1} gutterBottom>
          Each of the hash functions you mentioned (<b>Keccak</b>, <b>SHA256</b>
          , and <b>RIPEMD160</b>) has its own strengths and weaknesses, and the
          best choice depends on the specific application and requirements.
        </Typography>
        <Typography variant="body1" className={classes.body1} gutterBottom>
          In summary 🆒 the best hash function for a specific blockchain
          application depends on various factors such as security requirements,
          performance, and compatibility with existing systems.
        </Typography>
        <Typography variant="body1" className={classes.body1} gutterBottom>
          It is important to carefully evaluate the specific requirements of
          your use case before selecting a hash function.
        </Typography>
      </Box>

      <Box className={classes.footer}>
        <Button
          className={classes.navigator}
          variant="contained"
          color="primary"
          onClick={finish}
        >
          Finish
        </Button>
      </Box>
    </Box>
  );
};
