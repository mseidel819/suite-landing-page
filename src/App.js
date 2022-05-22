import "./App.css";
import { themeOptions } from "./theme";
import { ThemeProvider } from "@mui/material";
import NavBar from "./components/nav-bar.component.jsx";
import Hero from "./components/hero/hero.component";
import Jeremy from "./components/jeremy/jeremy.component";
import Footer from "./components/fotter/footer.component";

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
