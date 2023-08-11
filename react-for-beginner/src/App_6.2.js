import { useEffect, useState } from "react";

function App() {
  const [loading, setloading] = useState(true);
  const [coins, setConins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((rep) => rep.json())
      .then((json) => {
        setConins(json);
        setloading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price}USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
export default App;
