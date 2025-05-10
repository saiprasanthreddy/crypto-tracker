import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MockWebSocket } from '../services/mockWebSocket';
import PriceChangeCell from './PriceChangeCell';
import CryptoChart from './CryptoChart';
import CryptoLogo from './CryptoLogo'; // Import the new component

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto?.assets ?? []);
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new MockWebSocket(dispatch);
    ws.connect();
    return () => ws.disconnect();
  }, [dispatch]);

  const formatNumber = (num) => {
    if (typeof num !== 'number' || isNaN(num)) return 'N/A';
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="crypto-table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => {
            const safeAsset = {
              id: asset?.id ?? index,
              name: asset?.name ?? 'Unknown Asset',
              symbol: asset?.symbol ?? '???',
              price: asset?.price ?? 0,
              priceChange1h: asset?.priceChange1h ?? 0,
              priceChange24h: asset?.priceChange24h ?? 0,
              priceChange7d: asset?.priceChange7d ?? 0,
              marketCap: asset?.marketCap ?? 0,
              volume24h: asset?.volume24h ?? 0,
              circulatingSupply: asset?.circulatingSupply ?? 0,
              maxSupply: asset?.maxSupply ?? null,
              sparkline: asset?.sparkline ?? null,
              logo: asset?.logo || '/fallback-logo.png', // Simplified logo fallback
            };

            return (
              <tr key={safeAsset.id}>
                <td className="index-cell">{index + 1}</td>
                <td className="logo-cell">
                  <CryptoLogo logo={safeAsset.logo} name={safeAsset.name} />
                </td>
                <td className="name-cell">{safeAsset.name}</td>
                <td className="symbol-cell">{safeAsset.symbol}</td>
                <td className="price-cell">${formatNumber(safeAsset.price)}</td>
                <td className="change-cell"><PriceChangeCell value={safeAsset.priceChange1h} /></td>
                <td className="change-cell"><PriceChangeCell value={safeAsset.priceChange24h} /></td>
                <td className="change-cell"><PriceChangeCell value={safeAsset.priceChange7d} /></td>
                <td className="market-cap-cell">${formatNumber(safeAsset.marketCap)}</td>
                <td className="volume-cell">${formatNumber(safeAsset.volume24h)}</td>
                <td className="supply-cell">
                  {formatNumber(safeAsset.circulatingSupply)} {safeAsset.symbol}
                </td>
                <td className="supply-cell">
                  {safeAsset.maxSupply ? formatNumber(safeAsset.maxSupply) : '∞'}
                </td>
                <td className="chart-cell">
                  {safeAsset.sparkline ? (
                    <CryptoChart sparkline={safeAsset.sparkline} />
                  ) : (
                    <div className="chart-fallback">No Data</div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;