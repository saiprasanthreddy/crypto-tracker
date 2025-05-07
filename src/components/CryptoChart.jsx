import React from 'react';

const CryptoChart = ({ sparkline }) => {
  return (
    <div className="w-24 h-10">
      <img src={sparkline} alt="7-day chart" className="w-full h-full" />
    </div>
  );
};

export default CryptoChart;