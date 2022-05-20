import "./App.css";
import { themeOptions } from "./theme";
import { ThemeProvider } from "@mui/material";
import NavBar from "./components/nav-bar.component.jsx";

import ButtonPrimary from "./components/buttons/button-primary.component";
import ButtonSecondary from "./components/buttons/button-secondary.component";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
