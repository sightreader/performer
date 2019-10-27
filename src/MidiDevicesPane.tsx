import React, { useState, useRef, useEffect } from "react";
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
import {
  Fab,
  Box,
  Paper,
  FormGroup,
  FormControlLabel,
  Switch
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";
import clsx from "clsx";
import { SightReaderClient } from "./SightReaderClient";
import { EnumerateMidiDevicesResponse } from "./Client/Commands/Command";

const useStyles = makeStyles(theme => ({
  containerRoot: {
    padding: theme.spacing(1)
  },
  containerIo: {
    padding: theme.spacing(3, 2),
    background: theme.palette.primary.light,
    flexGrow: 1,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  containerInput: {
    padding: theme.spacing(3, 2)
  },
  containerOutput: {
    padding: theme.spacing(3, 2)
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

export default function MidiDevicesPane() {
  const classes = useStyles();
  const [midiDevices, setMidiDevices] = useState(
    new EnumerateMidiDevicesResponse()
  );

  useEffect(() => {
    SightReaderClient.Instance.EnumerateMidiDevices().then(midiDevices => {
      setMidiDevices(midiDevices);
    });
  }, []);

  const onInputDeviceChecked = (toggledDeviceName: any) => {
    SightReaderClient.Instance.SelectMidiDevices([toggledDeviceName], []).then(
      midiDevices => {
        setMidiDevices(midiDevices);
      }
    );
  };

  const onOutputDeviceChecked = (toggledDeviceName: any) => {
    SightReaderClient.Instance.SelectMidiDevices([], [toggledDeviceName]).then(
      midiDevices => {
        setMidiDevices(midiDevices);
      }
    );
  };

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Typography variant="h5" gutterBottom>
        MIDI Devices
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Changes made on this page apply instantly.
      </Typography>
      <Box display="flex" width="100%">
        <Paper className={clsx(classes.containerIo, classes.containerOutput)}>
          <Typography variant="h6" component="h3">
            Inputs
          </Typography>
          <FormGroup>
            {midiDevices.InputDeviceNames.map((deviceName, index) => (
              <FormControlLabel
                key={deviceName}
                control={
                  <Switch
                    checked={!!midiDevices.EnabledInputDeviceNames[index]}
                    onChange={() => onInputDeviceChecked(deviceName)}
                    value={deviceName}
                    color="secondary"
                  />
                }
                label={deviceName}
              />
            ))}
          </FormGroup>
        </Paper>
        <Paper className={clsx(classes.containerIo, classes.containerOutput)}>
          <Typography variant="h6" component="h3">
            Outputs
          </Typography>
          <FormGroup>
            {midiDevices.OutputDeviceNames.map((deviceName, index) => (
              <FormControlLabel
                key={deviceName}
                control={
                  <Switch
                    checked={!!midiDevices.EnabledOutputDeviceNames[index]}
                    onChange={() => onOutputDeviceChecked(deviceName)}
                    value={deviceName}
                    color="secondary"
                  />
                }
                label={deviceName}
              />
            ))}
          </FormGroup>
        </Paper>
      </Box>
    </Box>
  );
}
