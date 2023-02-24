import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Container,
  Typography,
  makeStyles,
  Avatar,
  Box,
} from "@material-ui/core";
import { Introduction } from "./Introduction";
import { HowItsWorking } from "./HowItsWorking";
import { WhatAreTheirProperties } from "./WhatAreTheirProperties";
import { TypesOfHashFunction } from "./TypesOfHashFunction";
import { BestToUse } from "./BestToUse";
import { FollowMe } from "./FollowMe";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  titleContainer: {
    margin: theme.spacing(3, 3, 2),
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Box className={classes.titleContainer}>
        <Box style={{ flex: 1 }}>
          <a
            href="https://github.com/nawar-hisso"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "black", display: "flex" }}
          >
            <Avatar
              style={{ flex: 0.3, margin: "0 10px 0 0" }}
              src="images/avatar.JPG"
            />
            <Typography style={{ flex: 1.2, padding: "7px 0 0 0" }}>
              Nawar Hisso
            </Typography>
          </a>
        </Box>
        <Typography
          style={{ flex: 1.5, fontFamily: "'Tangerine', serif" }}
          variant="h4"
        >
          🔗 Hash Function 🔒
        </Typography>
      </Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/how-does-it-work" element={<HowItsWorking />} />
          <Route
            path="/what-are-their-properties"
            element={<WhatAreTheirProperties />}
          />
          <Route
            path="/types-of-hash-function"
            element={<TypesOfHashFunction />}
          />
          <Route path="/best-to-use" element={<BestToUse />} />
          <Route path="/follow-me" element={<FollowMe />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
