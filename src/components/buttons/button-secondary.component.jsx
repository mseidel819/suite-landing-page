import { StyledButtonSecondary } from "./button-secondary.styles";

const ButtonSecondary = () => {
  return (
    <StyledButtonSecondary
      variant="outlined"
      sx={{ padding: { xs: "12px 16px", sm: "12px 24px" } }}
    >
      Request beta access
    </StyledButtonSecondary>
  );
};

export default ButtonSecondary;
