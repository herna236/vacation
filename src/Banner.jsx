import React from "react";
import { Box, Typography } from "@mui/material";

function Banner() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 250,
        backgroundImage: "url('/assets/trees.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        margin: 0,
        padding: 0,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0)",
          padding: 1,
          borderRadius: 1,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
        }}
      >
        Vacation Central
      </Typography>
    </Box>
  );
}

export default Banner;
