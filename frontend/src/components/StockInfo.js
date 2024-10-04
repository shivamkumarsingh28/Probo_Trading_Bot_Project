// src/components/StockInfo.js
import React from 'react';

const StockInfo = ({ stock }) => {
  return (
    <div className="stock-info card p-3 mb-3 shadow-sm">
      <h5>Stock Symbol: {stock.symbol}</h5>
      <p>Current Price: ${stock.price}</p>
      <p>Timestamp: {new Date(stock.timestamp).toLocaleTimeString()}</p>
    </div>
  );
};

export default StockInfo;
