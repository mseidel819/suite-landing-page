import { Container, Grid, CardMedia, Typography } from "@mui/material";
import phoneImg from "../../assets/image-hero-landscape@2x.webp";
import { ReactComponent as Curve } from "../../assets/pattern-curved-line-1.svg";
import ButtonPrimary from "../buttons/button-primary.component";
import "./hero.styles.css";

const Hero = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item md={10} xs={12}>
          <div className="hero-svg">
            <Curve />
          </div>
          <Typography variant="h1">
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
        <Grid item xs={12} sx={{ display: { sm: "none" } }}>
          <CardMedia component="img" image={phoneImg} alt="hero phone" />
        </Grid>
        <Grid item container md={2} xs={12}>
          <Grid item xs={12} sm={4} md={12}>
            <Typography variant="h2">2K+</Typography>
            <Typography variant="body2">companies</Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography variant="h2">8</Typography>
            <Typography variant="body2">languages</Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography variant="h2">1.2M</Typography>
            <Typography variant="body2">leads</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
