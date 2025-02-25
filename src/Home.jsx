import React from "react";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        textAlign: "center"
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        Welcome to the your vacation headquarters
      </Typography>
      <Typography variant="body1">
        Find your next vacation destination today
      </Typography>
    </Box>
  );
}

export default Home;
