import { Grid, Card, CardMedia, Container, Typography } from "@mui/material";
import { ReactComponent as LilCurve } from "../../assets/pattern-curved-line-2.svg";
import { ReactComponent as Blur } from "../../assets/pattern-blur.svg";
import jeremyImg from "../../assets/image-jeremy-large@2x.webp";
import "./jeremy.styles.css";

const Jeremy = () => {
  return (
    <Container maxWidth="lg">
      <Card className="jeremy-card">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          rowSpacing={4}
          sx={{ padding: { xs: "0 16px", sm: "0 58px", md: "0 125px" } }}
        >
          <Grid item md={5}>
            <Blur />
            {/* <CardMedia component="img" image={jeremyImg} alt="jeremy" /> */}
          </Grid>
          <Grid item md={2}>
            <div className="lil-curve">
              <LilCurve />
            </div>
          </Grid>
          <Grid item md={5}>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{
                fontWeight: "400",
                marginBottom: "40px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              It just <strong>works.</strong>
            </Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: "40px" }}>
              “I really like how it is an all-in-one solution that handle many
              of the tasks that you would normally need separate tools to do the
              same job. This thing is a miracle worker.”
            </Typography>
            <Typography
              variant="h3"
              color="text.secondary"
              sx={{
                textTransform: "uppercase",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Jeremy Robinson
            </Typography>
            <Typography
              variant="body2"
              color="#F3EDE7"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              CMO, Fylo
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Jeremy;
