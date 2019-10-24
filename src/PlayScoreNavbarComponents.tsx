import React, { useState, useRef, Fragment } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import { Client } from "../src/Client/Client";
import SettingsInputSvideoIcon from "@material-ui/icons/SettingsInputSvideo";
import { Fab, Box } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import Navbar from "../src/Navbar";
import MidiDevicesPane from "../src/MidiDevicesPane";

import SkipPreviousTwoToneIcon from "@material-ui/icons/SkipPreviousTwoTone";
import SkipNextTwoToneIcon from "@material-ui/icons/SkipNextTwoTone";
import ArrowBackIosTwoToneIcon from "@material-ui/icons/ArrowBackIosTwoTone";
import ArrowForwardIosTwoToneIcon from "@material-ui/icons/ArrowForwardIosTwoTone";
import { SightReaderClient } from "./SightReaderClient";

const useStyles = makeStyles(theme => ({
  containerRoot: {
    paddingTop: theme.spacing(3)
  },
  skipIcon: {
    paddingLeft: theme.spacing(1) / 2,
    paddingRight: theme.spacing(1) / 2
  }
}));

export default function PlayScoreNavbarComponents() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      width="100%"
      height="100%"
    >
      <IconButton color="secondary" className={classes.skipIcon}>
        <SkipPreviousTwoToneIcon
          onClick={() => (window as any).rerenderScore(1)}
        />
      </IconButton>
      <IconButton
        color="secondary"
        className={classes.skipIcon}
        onClick={() => {
          const windowVar = window as any;
          const previousPageNumber =
            windowVar.pageNumber > 1 ? windowVar.pageNumber - 1 : 1;
          windowVar.rerenderScore(previousPageNumber);
        }}
      >
        <ArrowBackIosTwoToneIcon />
      </IconButton>
      <IconButton
        color="secondary"
        className={classes.skipIcon}
        onClick={() => {
          SightReaderClient.Instance.getVerovio().then((verovio: any) => {
            const windowVar = window as any;
            const maxPageNumber = verovio.getPageCount();
            console.log(
              "windowVar.pageNumber, maxPageNumber:",
              windowVar.pageNumber,
              maxPageNumber
            );
            const nextPageNumber =
              windowVar.pageNumber < maxPageNumber
                ? windowVar.pageNumber + 1
                : maxPageNumber;
            windowVar.rerenderScore(nextPageNumber);
          });
        }}
      >
        <ArrowForwardIosTwoToneIcon />
      </IconButton>
      <IconButton
        color="secondary"
        className={classes.skipIcon}
        onClick={() => {
          SightReaderClient.Instance.getVerovio().then((verovio: any) => {
            const maxPageNumber = verovio.getPageCount();
            (window as any).rerenderScore(maxPageNumber);
          });
        }}
      >
        <SkipNextTwoToneIcon />
      </IconButton>
    </Box>
  );
}
