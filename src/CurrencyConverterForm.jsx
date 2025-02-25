import React from "react";
import { TextField, MenuItem, Select, FormControl, InputLabel, Box } from "@mui/material";

const CurrencyConverterForm = ({ amount, setAmount, selectedCurrency, setSelectedCurrency, rates, convertedAmount }) => {
  return (
    <Box sx={{ maxWidth: 400, margin: "auto", pt: .5, pb: .5 }}>
      {/* Amount Input Field */}
      <FormControl fullWidth margin="normal">
        <TextField
          label="Amount in USD"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          variant="outlined"
        />
      </FormControl>

      {/* Currency Dropdown */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Select Currency</InputLabel>
        <Select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          label="Select Currency"
        >
          {Object.keys(rates).map((currency) => (
            <MenuItem key={currency} value={currency}>
              {currency}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Converted Amount */}
      <Box sx={{ marginTop: 2 }}>
      <h3>
         Converted Amount:
        {convertedAmount !== null && convertedAmount !== undefined
        ? convertedAmount.toFixed(2)
        : "Calculating..."}
        {selectedCurrency}
     </h3>
      </Box>
    </Box>
  );
};

export default CurrencyConverterForm;
