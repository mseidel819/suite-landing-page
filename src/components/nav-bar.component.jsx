import { Container, Grid, Typography } from "@mui/material";
import ButtonSecondary from "./buttons/button-secondary.component";
import { ReactComponent as Logo } from "../assets/logo.svg";

const NavBar = () => {
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="space-between" sx={{ marginTop: "50px" }}>
        <Grid item xs={1}>
          <Logo />
        </Grid>
        <Grid item xs={3}>
          <ButtonSecondary />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBar;
