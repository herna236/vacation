import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function AgentBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   //would use back end to send email or third party app to send email
    alert(
      `Message sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" textAlign="center">
        Contact an Agent
      </Typography>
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email Address"
        name="email"
        variant="outlined"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Message"
        name="message"
        variant="outlined"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button variant="contained" type="submit" color="primary" endIcon={<SendIcon />}>
        Send Message
      </Button>
    </Box>
  );
}

export default AgentBooking;
