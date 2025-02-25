import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress } from "@mui/material";
import CurrencyConverterForm from "./CurrencyConverterForm";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.PROD
  ? 'https://data.fixer.io/api/latest'
  : `/api/latest?access_key=${API_KEY}`;

const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        console.log("Requesting:", API_URL);
        const response = await axios.get(API_URL);
        console.log("API Response:", response.data);

        if (response.data.success) {
          const baseRates = response.data.rates;
          const usdRate = baseRates["USD"];

          // Adjust rates to make USD the base currency
          const adjustedRates = Object.fromEntries(
            Object.entries(baseRates).map(([currency, rate]) => [currency, rate / usdRate])
          );

          setRates(adjustedRates);
          setLoading(false);
        } else {
          setError(response.data.error?.info || "Failed to fetch exchange rates. Please try again later");
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  // Calculate converted amount when currency or amount changes
  useEffect(() => {
    if (selectedCurrency && rates[selectedCurrency]) {
      setConvertedAmount(amount * rates[selectedCurrency]);
    }
  }, [amount, selectedCurrency]);

  return (
    <Box sx={{ maxWidth: 900, margin: "auto", padding: 0, textAlign: "center" }}>

      {loading ? (
        <CircularProgress />  // Show loading spinner while data is being fetched
      ) : error ? (
        <Typography color="error">Oops! Something went wrong: {error}</Typography>
      ) : (
        <CurrencyConverterForm
          amount={amount}
          setAmount={setAmount}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
          rates={rates}
          convertedAmount={convertedAmount}
        />
      )}


      <Typography variant="h5" sx={{ marginTop: 4 }}>
        Exchange Rates (Base: USD)
      </Typography>


      {!error && (
        <Box sx={{ marginTop: 2 }}>
          {Object.entries(rates).map(([currency, rate]) => (
            <Box
              sx={{
                padding: 1,
                border: '1px solid #ccc',
                borderRadius: '8px',
                marginBottom: 1,
                maxWidth: '300px',
                margin: 'auto',     // Center the box horizontally
              }}
              key={currency}
            >
              <Typography variant="body1">
                {currency}: {rate.toFixed(4)}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ExchangeRates;
