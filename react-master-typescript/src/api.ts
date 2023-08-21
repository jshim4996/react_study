const BASE_URL = `https://api.coinpaprika.com/v1`;

/* React Query 장점
   - feter 함수를 지원한다.
   - caching 기능을 제공한다. : 캐시에 가져온 데이터를 저장하고있다.
*/

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export function fetchCoinInfo(conId: string) {
  return fetch(`${BASE_URL}/coins/${conId}`).then((res) => res.json());
}

export function fetchCoinTickers(conId: string) {
  return fetch(`${BASE_URL}/tickers/${conId}`).then((res) => res.json());
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}&start=${startDate}&end=${endDate}`
  ).then((res) => res.json());
}
