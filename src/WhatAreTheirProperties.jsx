import React from "react";
import {
  Button,
  Typography,
  makeStyles,
  Box,
  List,
  ListItem,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  mainBox: { margin: "50px 0 50px 0" },
  mainTitle: { flex: 1.5, margin: 15, fontFamily: "'Tangerine', serif" },
  footer: { margin: "20px 0 0 0" },
  navigator: { margin: "0 10px 0 10px" },
}));

export const WhatAreTheirProperties = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const next = () => {
    navigate("/types-of-hash-function");
  };

  const previous = () => {
    navigate("/how-its-working");
  };

  return (
    <Box>
      <Box className={classes.mainBox}>
        <Typography className={classes.mainTitle} variant="h4">
          🎖️ What are their properties?
        </Typography>
        <Box>
          <img
            alt="Preimage resistance"
            width="100%"
            src="images/preimage.svg"
          />
        </Box>
        <List>
          <ListItem>
            <Typography className={classes.mainTitle} variant="h5">
              <b>Collision resistant: 💪🏻</b>
            </Typography>
          </ListItem>
          <Typography className={classes.mainTitle} variant="h6">
            Give two messages <b>m1 ≠ m2</b>, it is difficult to find a hash
            value such that <b>hash(k, m1) = hash(k, m2)</b> where <b>k</b> is
            the key value
          </Typography>
          <ListItem>
            <Typography className={classes.mainTitle} variant="h5">
              <b>Preimage resistance: 🌠</b>
            </Typography>
          </ListItem>
          <Typography className={classes.mainTitle} variant="h6">
            Given a hash value <b>h</b>, it is difficult to find a message{" "}
            <b>m</b> such that <b>h = hash(k, m)</b>
          </Typography>
          <ListItem>
            <Typography className={classes.mainTitle} variant="h5">
              <b>Second preimage resistance: 🥊</b>
            </Typography>
          </ListItem>
          <Typography className={classes.mainTitle} variant="h6">
            Given a message <b>m1</b>, it is difficult to find another message{" "}
            <b>m2</b> such that <b>hash(k, m1) = hash(k, m2)</b>
          </Typography>
          <ListItem>
            <Typography className={classes.mainTitle} variant="h5">
              <b>Large output space: 🔭</b>
            </Typography>
          </ListItem>
          <Typography className={classes.mainTitle} variant="h6">
            The only way to find a hash collision is via a brute force search 🔦
            which requires checking as many inputs as the hash function has
            possible outputs
          </Typography>
          <ListItem>
            <Typography className={classes.mainTitle} variant="h5">
              <b>Deterministic: 👌🏻</b>
            </Typography>
          </ListItem>
          <Typography className={classes.mainTitle} variant="h6">
            A hash function must be deterministic, which means that for any
            given input a hash function must always give the same result
          </Typography>
          <ListItem>
            <Typography className={classes.mainTitle} variant="h5">
              <b>Avalanche Effect: ✨</b>
            </Typography>
          </ListItem>
          <Typography className={classes.mainTitle} variant="h6">
            This means for a small change in the input, the output will change
            significantly
          </Typography>
          <ListItem>
            <Typography className={classes.mainTitle} variant="h5">
              <b>Puzzle Friendliness: 🧩</b>
            </Typography>
          </ListItem>
          <Typography className={classes.mainTitle} variant="h6">
            This means even if one gets to know the first <b>200 bytes</b>, one
            cannot guess or determine the next <b>56 bytes</b>
          </Typography>
          <ListItem>
            <Typography className={classes.mainTitle} variant="h5">
              <b>Fixed-length Mapping: 🗺️</b>
            </Typography>
          </ListItem>
          <Typography className={classes.mainTitle} variant="h6">
            For any input of fixed length, the hash function will always
            generate the output of the same length
          </Typography>
        </List>
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
          Show me the types of hash function
        </Button>
      </Box>
    </Box>
  );
};
