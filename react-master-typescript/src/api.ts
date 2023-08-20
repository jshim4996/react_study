const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export function fetchCoinInfo(conId: string) {
  return fetch(`${BASE_URL}/coins/${conId}`).then((res) => res.json());
}

export function fetchCoinTickers(conId: string) {
  return fetch(`${BASE_URL}/tickers/${conId}`).then((res) => res.json());
}
