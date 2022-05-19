import "./App.css";
import { themeOptions } from "./theme";
import { ThemeProvider } from "@mui/material";
import ButtonPrimary from "./components/buttons/button-primary.component";
import ButtonSecondary from "./components/buttons/button-secondary.component";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <h1>Hello</h1>
      <ButtonPrimary />
      <ButtonSecondary />
    </ThemeProvider>
  );
}

export default App;
