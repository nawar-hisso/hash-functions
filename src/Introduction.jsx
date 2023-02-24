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

export const Introduction = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const next = () => {
    navigate("/how-does-it-work");
  };

  return (
    <Box>
      <Box className={classes.mainBox}>
        <Typography className={classes.mainTitle} variant="h4">
          Introduction
        </Typography>
        <Typography variant="body1" className={classes.body1} gutterBottom>
          In blockchain technology, hash functions play a vital role in ensuring
          the security and integrity of the system.
        </Typography>
        <Typography variant="body1" className={classes.body1} gutterBottom>
          A hash function is a mathematical algorithm that takes an input data
          of any size and produces an output of fixed size.
        </Typography>
        <Typography variant="body1" className={classes.body1} gutterBottom>
          This output is also known as a #️⃣ hash value, which is a unique and
          seemingly random alphanumeric string of characters.
        </Typography>
      </Box>
      <Box>
        <img
          alt="Hashing algorithm"
          width={"100%"}
          src="images/introduction.jpeg"
        />
      </Box>
      <Box className={classes.footer}>
        <Button
          className={classes.navigator}
          variant="contained"
          color="primary"
          onClick={next}
        >
          How does it work?
        </Button>
      </Box>
    </Box>
  );
};
