import { Container, Grid, CardMedia, Typography, Box } from "@mui/material";
import phoneImg from "../../assets/image-hero-landscape@2x.webp";
import { ReactComponent as Curve } from "../../assets/pattern-curved-line-1.svg";
import ButtonPrimary from "../buttons/button-primary.component";
import "./hero.styles.css";
import heroImage from "../../assets/image-hero-portrait@2x.webp";

const Hero = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          item
          sm={10}
          xs={12}
          sx={{
            marginBottom: "50px",
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "500px",
          }}
        >
          <div className="hero-svg">
            <Curve />
          </div>

          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "38px", sm: "56px", md: "72px" } }}
          >
            A <strong>super solution</strong> <br /> for your
            <strong> business.</strong>
          </Typography>
          <div className="hero-p">
            <Typography variant="body1">
              Our marketing and sales automations help you scale your outreach
              to get more leads for your company.{" "}
            </Typography>
          </div>
          <ButtonPrimary />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: { sm: "none" }, marginBottom: "56px" }}
        >
          <CardMedia component="img" image={phoneImg} alt="hero phone" />
        </Grid>
        <Grid
          rowSpacing={4}
          item
          container
          md={2}
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              2K+
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              companies
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              8
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              languages
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              1.2M
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              leads
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
