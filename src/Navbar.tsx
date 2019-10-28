import React, { useState, useRef, Fragment, useEffect } from "react";
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
import SettingsInputSvideoTwoToneIcon from "@material-ui/icons/SettingsInputSvideoTwoTone";
import { Fab, Box, Divider } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";
import { useRouter } from "next/router";
import Link from "next/link";
import TouchAppTwoToneIcon from "@material-ui/icons/TouchAppTwoTone";
import screenfull from "screenfull";
import FullscreenExitTwoToneIcon from "@material-ui/icons/FullscreenExitTwoTone";
import FullscreenTwoToneIcon from "@material-ui/icons/FullscreenTwoTone";

const useStyles = makeStyles(t => ({
  activeIcon: {
    color: t.palette.secondary.contrastText
  },
  divider: {
    marginLeft: t.spacing(0)
  }
}));

interface NavbarProps {
  leftBarComponents: JSX.Element;
}

export default function Navbar(props: NavbarProps) {
  const router = useRouter();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isFullScreen, setFullScreen] = useState(
    screenfull.isEnabled && screenfull.isFullscreen
  );

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    var fullScreenApi = screenfull as any;

    if (isFullScreen && !fullScreenApi.isFullscreen) {
      fullScreenApi.request();
    } else if (!isFullScreen && fullScreenApi.isFullscreen) {
      fullScreenApi.exit();
    }
  }, [isFullScreen]);

  return (
    <Fragment>
      <AppBar position="static" data-name="navbar">
        <Toolbar variant="dense" style={{ height: 50 }} disableGutters>
          {props.leftBarComponents ? props.leftBarComponents : null}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
            height="100%"
          >
            <IconButton
              onClick={() => setFullScreen(!isFullScreen)}
              color="secondary"
            >
              {isFullScreen ? (
                <FullscreenExitTwoToneIcon className={classes.activeIcon} />
              ) : (
                <FullscreenTwoToneIcon />
              )}
            </IconButton>
            <Divider orientation="vertical" className={classes.divider} />
            <Link href="/">
              <IconButton
                onClick={handleMenu}
                color="secondary"
                className={
                  router.pathname === "/" ? classes.activeIcon : undefined
                }
              >
                <TouchAppTwoToneIcon />
              </IconButton>
            </Link>
            <Link href="/scores">
              <IconButton
                onClick={handleMenu}
                color="secondary"
                className={
                  router.pathname === "/scores" ? classes.activeIcon : undefined
                }
              >
                <MenuBookTwoToneIcon />
              </IconButton>
            </Link>
            <Link href="/devices">
              <IconButton
                onClick={handleMenu}
                color="secondary"
                className={
                  router.pathname === "/devices"
                    ? classes.activeIcon
                    : undefined
                }
              >
                <SettingsInputSvideoTwoToneIcon />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

Navbar.defaultProps = {
  leftBarComponents: null
};
