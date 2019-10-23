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

const useStyles = makeStyles(theme => ({
  containerRoot: {
    paddingTop: theme.spacing(3)
  }
}));

export default function DevicesPage() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Navbar />
      <Container maxWidth="md" className={classes.containerRoot}>
        <MidiDevicesPane />
      </Container>
    </Fragment>
  );
}
