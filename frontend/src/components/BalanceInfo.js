// src/components/BalanceInfo.js
import React from 'react';

const BalanceInfo = ({ balance, position }) => {
  return (
    <div className="balance-info card p-3 mb-3 shadow-sm">
      <h5>Balance: ${balance.toFixed(2)}</h5>
      <p>Position: {position} stocks</p>
    </div>
  );
};

export default BalanceInfo;
