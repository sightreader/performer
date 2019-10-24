import React, { useState, useRef, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import { Client } from "../src/Client/Client";
import SettingsInputSvideoTwoToneIcon from "@material-ui/icons/SettingsInputSvideoTwoTone";
import {
  Fab,
  Box,
  Paper,
  FormGroup,
  FormControlLabel,
  Switch,
  InputBase
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";
import clsx from "clsx";
import { SightReaderClient } from "./SightReaderClient";
import {
  EnumerateMidiDevicesResponse,
  EnumerateScoresResponse
} from "./Client/Commands/Command";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import theme from "./theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperTableContainer: {
      marginTop: theme.spacing(3),
      width: "100%",
      overflowX: "auto",
      marginBottom: theme.spacing(2),
      background: theme.palette.primary.light
    },
    tableCell: {
      cursor: "pointer"
    },
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
      background: theme.palette.primary.light
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    },
    activeScoreSection: {
      marginBottom: theme.spacing(2)
    }
  })
);

export default function ScoresPane() {
  const classes = useStyles();
  const [scoreFilter, setScoreFilter] = useState<string>("");
  const [scores, setScores] = useState<string[]>([]);
  const [activeScore, setActiveScore] = useState<string>("");

  useEffect(() => {
    SightReaderClient.Instance.EnumerateScores().then(result => {
      setScores(result.FilePaths);
      setActiveScore(result.ActiveScoreFilePath);
    });
  }, []);

  const onSelectScore = (scoreFilePath: string) => {
    SightReaderClient.Instance.LoadScore(scoreFilePath).then(result => {
      SightReaderClient.Instance.setScore(result.Score);
      setActiveScore(result.ActiveScoreFilePath);
    });
  };

  const filteredScores = scores.filter(x =>
    x
      .substring(x.lastIndexOf("\\") + 1)
      .toLowerCase()
      .includes(scoreFilter.toLowerCase())
  );

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Typography variant="h5" gutterBottom>
        Scores
      </Typography>
      <Box className={classes.activeScoreSection}>
        {activeScore.length > 0 && (
          <Typography variant="body1" gutterBottom>
            <strong>Playing:</strong>{" "}
            {activeScore.substring(activeScore.lastIndexOf("\\") + 1)}
          </Typography>
        )}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Filter scores..."
            onChange={({ target }) =>
              setScoreFilter(target!.value ? target!.value : "")
            }
          />
          <IconButton className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Paper className={classes.paperTableContainer}>
          <Table size="small">
            <TableBody>
              {filteredScores.length > 0 &&
                filteredScores.map(score => (
                  <TableRow key={score}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.tableCell}
                      onClick={() => onSelectScore(score)}
                    >
                      {score.substring(score.lastIndexOf("\\") + 1)}
                    </TableCell>
                  </TableRow>
                ))}
              {filteredScores.length === 0 && (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {scoreFilter.length > 0
                      ? `0 results for '${scoreFilter}' (${scores.length} total scores).`
                      : "Loading..."}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Box>
  );
}
