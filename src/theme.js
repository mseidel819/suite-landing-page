import { createTheme } from "@mui/material";

// import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#172339",
      light: "#0079ff",
      dark: "#0079ff",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#ffffff",
      paper: "#172339",
    },
    text: {
      secondary: "#faf8f6",
      primary: "#172339",
      disabled: "rgba(254,254,254,0.8)",
    },
  },
  typography: {
    fontFamily: '"Epilogue" , sans-serif',
    h1: {
      fontWeight: 400,
      fontSize: 26,
      lineHeight: 1.08,
    },
    h2: {
      fontSize: 49,
      fontWeight: 400,
      lineHeight: 1.16,
    },
    h3: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.77,
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: 18,
    },
    button: {
      fontSize: 18,
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 15,
  },
});
