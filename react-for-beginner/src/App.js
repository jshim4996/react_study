import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>리액트 학습</h1>
      <Button text={"컨티뉴"}></Button>
    </div>
  );
}

export default App;
