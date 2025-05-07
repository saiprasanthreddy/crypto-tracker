import { createSlice } from '@reduxjs/toolkit';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: [
      {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        logo: 'crypto-tracker/src/assets/crypto-logos/btc.png',
        price: 64250.00,
        priceChange1h: 0.5,
        priceChange24h: 1.8,
        priceChange7d: -2.3,
        marketCap: 1.26e12,
        volume24h: 25.4e9,
        circulatingSupply: 19675625,
        maxSupply: 21000000,
        sparkline: '/assets/sparklines/btc-sparkline.svg'
      },
      {
        id: 2,
        name: 'Ethereum',
        symbol: 'ETH',
        logo: 'crypto-tracker/src/assets/crypto-logos/eth.png',
        price: 3475,
        priceChange1h: -0.3,
        priceChange24h: 3.2,
        priceChange7d: 5.1,
        marketCap: 417.3e9,
        volume24h: 12.7e9,
        circulatingSupply: 120182432,
        maxSupply: null,
        sparkline: '/assets/sparklines/eth-sparkline.svg'
      },
      {
        id: 3,
        name: 'Tether',
        symbol: 'USDT',
        logo: 'crypto-tracker/src/assets/crypto-logos/usdt.png',
        price: 1.0,
        priceChange1h: 0.02,
        priceChange24h: 0.01,
        priceChange7d: -0.005,
        marketCap: 104.3e9,
        volume24h: 42.9e9,
        circulatingSupply: 104352873634,
        maxSupply: null,
        sparkline: '/assets/sparklines/usdt-sparkline.svg'
      },
      {
        id: 4,
        name: 'Binance Coin',
        symbol: 'BNB',
        logo: 'crypto-tracker/src/assets/crypto-logos/binance-coin-bnb.png',
        price: 585,
        priceChange1h: -1.2,
        priceChange24h: 4.5,
        priceChange7d: -3.4,
        marketCap: 89.6e9,
        volume24h: 1.2e9,
        circulatingSupply: 153432897,
        maxSupply: 170532785,
        sparkline: '/assets/sparklines/bnb-sparkline.svg'
      },
      {
        id: 5,
        name: 'Solana',
        symbol: 'SOL',
        logo: 'crypto-tracker/src/assets/crypto-logos/solana.png',
        price: 172,
        priceChange1h: 5.8,
        priceChange24h: -3.4,
        priceChange7d: 12.1,
        marketCap: 76.4e9,
        volume24h: 2.9e9,
        circulatingSupply: 444914552,
        maxSupply: null,
        sparkline: '/assets/sparklines/sol-sparkline.svg'
      }
    ],
    status: 'idle',
    error: null
  },
  reducers: {
    updatePrices: (state) => {
      state.assets = state.assets.map(asset => {
        // Generate fresh random fluctuations
        const hourlyFluctuation = (Math.random() * 4 - 2); // -2% to +2%
        const dailyFluctuation = (Math.random() * 6 - 3);   // -3% to +3%
        const weeklyFluctuation = (Math.random() * 10 - 5); // -5% to +5%
        
        // Calculate new values
        const newPrice = asset.price * (1 + hourlyFluctuation/100);
        const newVolume = asset.volume24h * (1 + (Math.random() * 0.3 - 0.15));

        return {
          ...asset,
          price: parseFloat(newPrice.toFixed(2)),
          priceChange1h: parseFloat(hourlyFluctuation.toFixed(2)),
          priceChange24h: parseFloat((asset.priceChange24h + dailyFluctuation).toFixed(2)),
          priceChange7d: parseFloat((asset.priceChange7d + weeklyFluctuation).toFixed(2)),
          volume24h: parseFloat(newVolume.toFixed(2))
        };
      });
    }
  }
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;