// src/components/TradeLog.js
import React from 'react';

const TradeLog = ({ trades }) => {
  const currentTime = new Date();
  const timeLimit = new Date(currentTime.getTime() - 10 * 60 * 1000); // 10 minutes ago
  const currentTrades = trades.filter(trade => new Date(trade.time) >= timeLimit);

  return (
    <div className="trade-log card p-3 mb-3 shadow-sm">
      <h5>Trade Log</h5>
      <ul>
        {currentTrades.map((trade, index) => (
          <li key={index}>
            <b>{trade.type}</b> at ${trade.price} on {new Date(trade.time).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TradeLog;
