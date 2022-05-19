import "./App.css";
import { themeOptions } from "./theme";
import { ThemeProvider } from "@mui/material";
import ButtonPrimary from "./components/buttons/button-primary.component";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <h1>Hello</h1>
      <ButtonPrimary />
    </ThemeProvider>
  );
}

export default App;
