import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import ExchangeRates from "./ExchangeRates";
import VacationLinks from "./VacationLinks";
import AgentBooking from "./AgentBooking";
import Home from "./Home";
import Banner from "./Banner";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <Router>

      <Banner />


      <Navbar />


      <Box sx={{ padding: 3, marginTop: 1}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange-rates" element={<ExchangeRates />} />
          <Route path="/vacation-links" element={<VacationLinks />} />
          <Route path="/agent-booking" element={<AgentBooking />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
