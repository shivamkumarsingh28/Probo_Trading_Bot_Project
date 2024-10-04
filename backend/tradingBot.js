// tradingBot.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getStockPrice } = require('./mockApi');

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies

let balance = parseFloat(process.env.INITIAL_BALANCE) || 1000;  // Initial balance
let position = 0;    // No stocks initially
let buyPrice = null; // Price at which we bought the stock
const TRADE_LOG = []; 
let tradingActive = false; // Flag to control trading

const checkTrade = () => {
  if (!tradingActive) return; // Exit if trading is not active
  const stock = getStockPrice();
  const currentPrice = parseFloat(stock.price);

  // Check buying condition: buy if no stocks and price drops by 2% from the last price
  if (!buyPrice && balance >= currentPrice * 0.98) {
    buyPrice = currentPrice;  // Buy the stock
    position = balance / currentPrice;  // Convert all balance to stock
    balance = 0;  // No cash left after buying
    TRADE_LOG.push({ type: 'BUY', price: currentPrice, time: stock.timestamp, balanceAfterTrade: balance });
    console.log(`Bought stock at ${currentPrice}. Balance after trade: ${balance}`);
  }

  // Check selling condition: sell if stock price rises by 3% from the buying price
  if (buyPrice && currentPrice >= buyPrice * 1.03) {
    balance = position * currentPrice;  // Convert all stocks back to cash
    position = 0;  // No more stocks after selling
    TRADE_LOG.push({ type: 'SELL', price: currentPrice, time: stock.timestamp, balanceAfterTrade: balance });
    console.log(`Sold stock at ${currentPrice}. Balance after trade: ${balance}`);
    buyPrice = null;  // Reset buyPrice after selling
  }
};
let intervalId; // Store the interval ID
// Simulate checking stock prices and trading every 3 seconds
const startTrading = () => {
  tradingActive = true;
  intervalId = setInterval(checkTrade, 3000);
};
const stopTrading = () => {
  tradingActive = false;
  clearInterval(intervalId);
};

// API Endpoints
app.post('/api/start-trade-bot', (req, res) => {
  startTrading();
  res.json({ message: 'Trade bot started' });
});

app.post('/api/stop-trade-bot', (req, res) => {
  stopTrading();
  res.json({ message: 'Trade bot stopped' });
});

app.get('/api/stock', (req, res) => {
  const stock = getStockPrice();
  res.json({ stock });
});

app.get('/api/balance', (req, res) => {
  res.json({ balance, position });
});

app.get('/api/trade-log', (req, res) => {
  res.json({ TRADE_LOG });
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
