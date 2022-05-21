import "./App.css";
import { themeOptions } from "./theme";
import { ThemeProvider } from "@mui/material";
import NavBar from "./components/nav-bar.component.jsx";
import Hero from "./components/hero/hero.component";
import Jeremy from "./components/jeremy/jeremy.component";
import Footer from "./components/fotter/footer.component";

import ButtonPrimary from "./components/buttons/button-primary.component";
import ButtonSecondary from "./components/buttons/button-secondary.component";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <NavBar />
      <Hero />
      <Jeremy />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
