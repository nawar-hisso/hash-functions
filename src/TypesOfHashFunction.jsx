import React from "react";
import { Spinner } from "react-bootstrap";
import { ethers, utils } from "ethers";
import {
  Button,
  Typography,
  makeStyles,
  Box,
  List,
  ListItem,
  TextField,
  Chip,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Hasher_ABI from "./configs/Hasher_ABI.json";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  mainBox: { margin: "50px 0 50px 0" },
  mainTitle: { flex: 1.5, margin: 15, fontFamily: "'Tangerine', serif" },
  footer: { margin: "20px 0 0 0" },
  navigator: { margin: "0 10px 0 10px" },
  form: {
    margin: theme.spacing(3, 0),
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
  },
  textField: {
    flex: 1.5,
  },
}));

export const TypesOfHashFunction = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [term, setTerm] = useState("");

  const [isLoadingKeccak, setIsLoadingKeccak] = useState(false);
  const [isLoadingSHA256, setIsLoadingSHA256] = useState(false);
  const [isLoadingRIPEMD160, setIsLoadingRIPEMD160] = useState(false);

  const [hashStringKeccak, setHashStringKeccak] = useState("");
  const [hashStringSHA256, setHashStringSHA256] = useState("");
  const [hashStringRIPEMD160, setHashStringRIPEMD160] = useState("");

  const [liveHashStringKeccak, setLiveHashStringKeccak] = useState("");
  const [liveHashStringSHA256, setLiveHashStringSHA256] = useState("");
  const [liveHashStringRIPEMD160, setLiveHashStringRIPEMD160] = useState("");

  const next = () => {
    navigate("/best-to-use");
  };

  const previous = () => {
    navigate("/what-are-their-properties");
  };

  const getContract = async () => {
    // Connect to the network by creating an instance of a new provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Create an instance of the SimpleStorage contract
    const contract = new ethers.Contract(
      "0xACBe126f39B441d952BC2e2FAfbAa818bD55c516",
      Hasher_ABI,
      provider
    );

    return contract;
  };

  const hashKeccak = async () => {
    setIsLoadingKeccak(true);
    const contract = await getContract();
    contract.hashWithKeccak256(utils.toUtf8Bytes(term)).then((result) => {
      setHashStringKeccak(result);
      setIsLoadingKeccak(false);
    });
  };

  const hashSHA256 = async () => {
    setIsLoadingSHA256(true);
    const contract = await getContract();
    contract.hashWithSHA256(utils.toUtf8Bytes(term)).then((result) => {
      setHashStringSHA256(result);
      setIsLoadingSHA256(false);
    });
  };

  const hashRIPEMD160 = async () => {
    setIsLoadingRIPEMD160(true);
    const contract = await getContract();
    contract.hashWithRIPEMD160(utils.toUtf8Bytes(term)).then((result) => {
      setHashStringRIPEMD160(result);
      setIsLoadingRIPEMD160(false);
    });
  };

  const setTermInput = (event) => {
    setTerm(event.target.value);
  };

  const setLiveTermInput = (event) => {
    const keccak = utils.keccak256(utils.toUtf8Bytes(event.target.value));
    const sha256 = utils.sha256(utils.toUtf8Bytes(event.target.value));
    const ripemd160 = utils.ripemd160(utils.toUtf8Bytes(event.target.value));
    setLiveHashStringKeccak(keccak);
    setLiveHashStringSHA256(sha256);
    setLiveHashStringRIPEMD160(ripemd160);
  };

  return (
    <Box>
      <Box className={classes.mainBox}>
        <Typography className={classes.mainTitle} variant="h4">
          🔐 Types of hash function
        </Typography>
        <Box>
          <img
            alt="Preimage resistance"
            width="100%"
            src="images/solidity.jpeg"
          />
        </Box>
        <Typography className={classes.mainTitle} variant="h6">
          There are several types of hash functions used in blockchain
          technology, but the most common ones are:
        </Typography>
        <List>
          <ListItem>
            <Typography className={classes.mainTitle} variant="h5">
              <b>1️⃣ Keccak-256 (SHA-3):</b>
            </Typography>
          </ListItem>
          <Box style={{ padding: "10px" }}>
            <Chip style={{ margin: "5px" }} label="Ethereum" color="success" />
            <Chip
              style={{ margin: "5px" }}
              label="byte input"
              color="success"
            />
            <Chip
              style={{ margin: "5px" }}
              label="256 bit output"
              color="success"
            />
            <Chip
              style={{ margin: "5px" }}
              label="All solidity versions"
              color="success"
            />
            <Chip
              style={{ margin: "5px" }}
              label="High collision resistance"
              color="success"
            />
            <Chip
              style={{ margin: "5px" }}
              label="High preimage resistance"
              color="success"
            />
            <Chip style={{ margin: "5px" }} label="Fast" color="success" />
            <Chip
              style={{ margin: "5px" }}
              label="Resistant to length extension attacks"
              color="success"
            />
          </Box>
          <Typography className={classes.mainTitle} variant="h6">
            It's a widely used cryptographic hash function that produces a
            256-bit output hash value. It is used in <b>Ethereum</b> and other
            smart contract platforms.
          </Typography>
          <Typography className={classes.mainTitle} variant="h6">
            High collision resistance and preimage resistance, fast, and
            resistant to length extension attacks.
          </Typography>
          <ListItem>
            <Typography className={classes.mainTitle} variant="h5">
              <b>2️⃣ SHA-256:</b>
            </Typography>
          </ListItem>
          <Box style={{ padding: "10px" }}>
            <Chip style={{ margin: "5px" }} label="Bitcoin" color="success" />
            <Chip
              style={{ margin: "5px" }}
              label="byte input"
              color="success"
            />
            <Chip
              style={{ margin: "5px" }}
              label="256 bit output"
              color="success"
            />
            <Chip
              style={{ margin: "5px" }}
              label="All solidity versions"
              color="success"
            />
            <Chip
              style={{ margin: "5px" }}
              label="High collision resistance"
              color="success"
            />
            <Chip
              style={{ margin: "5px" }}
              label="High preimage resistance"
              color="success"
            />
            <Chip style={{ margin: "5px" }} label="Fast" color="success" />
            <Chip
              style={{ margin: "5px" }}
              label="Not resistant to length extension attacks"
              color="success"
            />
          </Box>
          <Typography className={classes.mainTitle} variant="h6">
            This is another cryptographic hash function that produces a 256-bit
            output hash value. It is used in <b>Bitcoin</b> and many other
            cryptocurrencies.
          </Typography>
          <Typography className={classes.mainTitle} variant="h6">
            High collision resistance and preimage resistance, fast, but not
            resistant to length extension attacks.
          </Typography>
          <ListItem>
            <Typography className={classes.mainTitle} variant="h5">
              <b>3️⃣ RIPEMD-160:</b>
            </Typography>
          </ListItem>
          <Box style={{ padding: "10px" }}>
            <Chip style={{ margin: "5px" }} label="Bitcoin" color="success" />
            <Chip
              style={{ margin: "5px" }}
              label="byte input"
              color="success"
            />
            <Chip
              style={{ margin: "5px" }}
              label="160 bit output"
              color="success"
            />
            <Chip
              style={{ margin: "5px" }}
              label="All solidity versions"
              color="success"
            />
            <Chip
              style={{ margin: "5px" }}
              label="Moderate collision resistance"
              color="success"
            />
            <Chip
              style={{ margin: "5px" }}
              label="Moderate preimage resistance"
              color="success"
            />
            <Chip style={{ margin: "5px" }} label="Fast" color="success" />
            <Chip
              style={{ margin: "5px" }}
              label="Not resistant to length extension attacks"
              color="success"
            />
          </Box>
          <Typography className={classes.mainTitle} variant="h6">
            This is a hash function that produces a 160-bit output hash value.
            It is used in <b>Bitcoin</b> to produce shorter addresses.
          </Typography>
          <Typography className={classes.mainTitle} variant="h6">
            Moderate collision resistance and preimage resistance, fast, but not
            resistant to length extension attacks.
          </Typography>
          <Typography style={{ margin: "50px 0 0 0" }} variant="h5">
            <b>⛹🏻 Practice:</b>
          </Typography>
          <Box className={classes.form}>
            <TextField
              onChange={setTermInput}
              label="Enter new data"
              name="data"
              className={classes.textField}
              fullWidth
            />
          </Box>
          <Box className={classes.form}>
            <Button
              style={{ margin: "20px 10px 20px 0" }}
              variant="contained"
              color="primary"
              type="submit"
              onClick={hashKeccak}
              disabled={!term || isLoadingKeccak}
            >
              <b>Keccak256</b>
            </Button>
            <Box
              className="text-center"
              style={{
                flex: 1,
                minHeight: "60px",
                border: "grey 1px solid",
                padding: "10px",
                margin: "20px 0 20px 0",
              }}
            >
              {isLoadingKeccak ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="md"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
              ) : (
                <Typography style={{ fontSize: 11, padding: "10px 0 10px 0" }}>
                  <b>{hashStringKeccak}</b>
                </Typography>
              )}
            </Box>
          </Box>
          <Box className={classes.form}>
            <Button
              style={{ margin: "20px 10px 20px 0", padding: "0 30px" }}
              variant="contained"
              color="primary"
              type="submit"
              onClick={hashSHA256}
              disabled={!term || isLoadingSHA256}
            >
              <b>SHA256</b>
            </Button>
            <Box
              className="text-center"
              style={{
                flex: 1,
                minHeight: "60px",
                border: "grey 1px solid",
                padding: "10px",
                margin: "20px 0 20px 0",
              }}
            >
              {isLoadingSHA256 ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="md"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
              ) : (
                <Typography style={{ fontSize: 11, padding: "10px 0 10px 0" }}>
                  <b>{hashStringSHA256}</b>
                </Typography>
              )}
            </Box>
          </Box>
          <Box className={classes.form}>
            <Button
              style={{ margin: "20px 10px 20px 0" }}
              variant="contained"
              color="primary"
              type="submit"
              onClick={hashRIPEMD160}
              disabled={!term || isLoadingRIPEMD160}
            >
              <b>RIPEMD160</b>
            </Button>
            <Box
              className="text-center"
              style={{
                flex: 1,
                minHeight: "60px",
                border: "grey 1px solid",
                padding: "10px",
                margin: "20px 0 20px 0",
              }}
            >
              {isLoadingRIPEMD160 ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="md"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
              ) : (
                <Typography style={{ fontSize: 11, padding: "10px 0 10px 0" }}>
                  <b>{hashStringRIPEMD160}</b>
                </Typography>
              )}
            </Box>
          </Box>

          <Typography style={{ margin: "50px 0 0 0" }} variant="h5">
            <b>🎮 Live practice:</b>
          </Typography>
          <Box className={classes.form}>
            <TextField
              onChange={setLiveTermInput}
              label="Enter new data"
              name="data"
              className={classes.textField}
              fullWidth
            />
          </Box>
          <Box className={classes.form}>
            <Button
              style={{ margin: "20px 10px 20px 0" }}
              variant="contained"
              color="secondary"
            >
              <b>Keccak256</b>
            </Button>
            <Box
              className="text-center"
              style={{
                flex: 1,
                minHeight: "60px",
                border: "grey 1px solid",
                padding: "10px",
                margin: "20px 0 20px 0",
              }}
            >
              <Typography style={{ fontSize: 11, padding: "10px 0 10px 0" }}>
                <b>{liveHashStringKeccak}</b>
              </Typography>
            </Box>
          </Box>
          <Box className={classes.form}>
            <Button
              style={{ margin: "20px 10px 20px 0", padding: "0 30px" }}
              variant="contained"
              color="secondary"
            >
              <b>SHA256</b>
            </Button>
            <Box
              className="text-center"
              style={{
                flex: 1,
                minHeight: "60px",
                border: "grey 1px solid",
                padding: "10px",
                margin: "20px 0 20px 0",
              }}
            >
              <Typography style={{ fontSize: 11, padding: "10px 0 10px 0" }}>
                <b>{liveHashStringSHA256}</b>
              </Typography>
            </Box>
          </Box>
          <Box className={classes.form}>
            <Button
              style={{ margin: "20px 10px 20px 0" }}
              variant="contained"
              color="secondary"
            >
              <b>RIPEMD160</b>
            </Button>
            <Box
              className="text-center"
              style={{
                flex: 1,
                minHeight: "60px",
                border: "grey 1px solid",
                padding: "10px",
                margin: "20px 0 20px 0",
              }}
            >
              <Typography style={{ fontSize: 11, padding: "10px 0 10px 0" }}>
                <b>{liveHashStringRIPEMD160}</b>
              </Typography>
            </Box>
          </Box>
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
          What is the best type to use?
        </Button>
      </Box>
    </Box>
  );
};
