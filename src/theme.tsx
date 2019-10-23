import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e8ecf1"
    },
    secondary: {
      main: "#7393a7"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#e8ecf1"
    }
  },
  overrides: {
    MuiToolbar: {
      root: {
        background: "#b5cfd8"
      }
    }
  },
  typography: {
    fontSize: 16,
    button: {
      // color: "#7393a7"
    }
  }
});

export default theme;
