import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CryptoTable from './components/CryptoTable';

function App() {
  return (
    <Provider store={store} >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Real-Time Crypto Price Tracker</h1>
        <CryptoTable />
      </div>
    </Provider>
  );
}

export default App;