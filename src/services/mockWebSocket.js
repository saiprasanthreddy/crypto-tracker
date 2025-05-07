import { updatePrices } from '../features/crypto/cryptoSlice';

export class MockWebSocket {
  constructor(dispatch) {
    this.dispatch = dispatch;
    this.interval = null;
  }

  connect() {
    this.interval = setInterval(() => {
      this.dispatch(updatePrices());
    }, 1000);
  }

  disconnect() {
    clearInterval(this.interval);
  }
}