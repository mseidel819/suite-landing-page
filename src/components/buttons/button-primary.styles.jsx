import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const StyledButtonPrimary = styled(Button)({
  borderRadius: "6px",
  padding: "15px 31px",
  backgroundImage: "none",
  transition: "all .3s",

  "&:hover": {
    backgroundImage:
      "linear-gradient(135deg, #A060FF 0%, #CB30E3 49.21%, #FFA84E 100%)",
    transition: "all .3s",
  },
});
