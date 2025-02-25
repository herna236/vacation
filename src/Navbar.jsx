import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="body1" sx={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
            Home
          </Typography>
        </Link>

        <Typography variant="body1" sx={{ color: "white", mx: 3, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
          |
        </Typography>

        <Link to="/vacation-links" style={{ textDecoration: "none" }}>
          <Typography variant="body1" sx={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
            Popular Destinations
          </Typography>
        </Link>

        <Typography variant="body1" sx={{ color: "white", mx: 3, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
          |
        </Typography>

        <Link to="/exchange-rates" style={{ textDecoration: "none" }}>
          <Typography variant="body1" sx={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
            Exchange Rates
          </Typography>
        </Link>

        <Typography variant="body1" sx={{ color: "white", mx: 3, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
          |
        </Typography>

        <Link to="/agent-booking" style={{ textDecoration: "none" }}>
          <Typography variant="body1" sx={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
            Contact Agent
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
