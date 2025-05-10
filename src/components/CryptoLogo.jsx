import React from 'react';
import PropTypes from 'prop-types';

const CryptoLogo = ({ logo, name }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}${logo}`}
      alt={`${name} logo`}
      className="crypto-logo"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `${process.env.PUBLIC_URL}/fallback-logo.png`;
      }}
    />
  );
};

CryptoLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default React.memo(CryptoLogo);