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
import ScorePane from "../src/ScorePane";
import PlayScoreNavbarComponents from "../src/PlayScoreNavbarComponents";

const useStyles = makeStyles(theme => ({
  containerRoot: {
    padding: theme.spacing(1)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function PlayPage() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <Box display="flex" flexDirection="column" height="100%" width="100%">
      <Navbar leftBarComponents={<PlayScoreNavbarComponents />} />
      {/* <Container maxWidth="xl" className={classes.containerRoot}>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            className={classes.margin}
          >
            <MenuIcon />
          </Fab>
        </Box>
      </Container> */}
      <ScorePane />
    </Box>
  );
}
