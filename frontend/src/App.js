// src/App.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css'; // Custom styles
import BalanceInfo from './components/BalanceInfo';
import StockInfo from './components/StockInfo';
import TradeLog from './components/TradeLog';

function App() {
  const [stock, setStock] = useState({});
  const [balance, setBalance] = useState({ balance: 0, position: 0 });
  const [trades, setTrades] = useState([]);
  const [isTrading, setIsTrading] = useState(false); // State to track if trading is active
  const [error, setError] = useState(null); // State to track errors


  useEffect(() => {
    const fetchData = async () => {
      try {
        const stockResponse = await axios.get('http://localhost:5000/api/stock');
        const balanceResponse = await axios.get('http://localhost:5000/api/balance');
        const tradeLogResponse = await axios.get('http://localhost:5000/api/trade-log');
        
        setStock(stockResponse.data.stock);
        setBalance(balanceResponse.data);
        setTrades(tradeLogResponse.data.TRADE_LOG);
      } catch (error) {
        console.error('Error fetching data from backend:', error);
        setError('Failed to fetch data. Please run your backend.'); // Set error message
      }
    };

    // Poll every 3 seconds to update data
    const intervalId = setInterval(fetchData, 3000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const resetTrades = () => {
    setTrades([]); // Reset trades to an empty array
    
  };

  const startTradeBot = async () => {
    await axios.post('http://localhost:5000/api/start-trade-bot');
    setIsTrading(true);
  };

  const stopTradeBot = async () => {
    await axios.post('http://localhost:5000/api/stop-trade-bot');
    setIsTrading(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Probo Trading Bot Dashboard</h1>
      {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
      <StockInfo stock={stock} />
      <BalanceInfo balance={balance.balance} position={balance.position} />
      <TradeLog trades={trades} />
      <button onClick={resetTrades} className="btn btn-danger mt-3">Reset Trades</button>
      <button onClick={isTrading ? stopTradeBot : startTradeBot} className="btn btn-primary mt-3">
        {isTrading ? 'Stop Trade Bot' : 'Start Trade Bot'}
      </button>
    </div>
  );
}

export default App;
