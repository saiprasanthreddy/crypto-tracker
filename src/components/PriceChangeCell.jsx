import React from 'react';
import PropTypes from 'prop-types';

const PriceChangeCell = ({ value }) => {
  if (typeof value !== 'number' || isNaN(value)) {
    return <span className="price-neutral">-</span>;
  }

  const isPositive = value >= 0;
  const colorClass = isPositive ? 'price-up' : 'price-down';
  const symbol = isPositive ? '▲' : '▼';

  return (
    <span className={`${colorClass} price-change`}>
      {symbol} {Math.abs(value).toFixed(2)}%
    </span>
  );
};

PriceChangeCell.propTypes = {
  value: PropTypes.number
};

export default PriceChangeCell;