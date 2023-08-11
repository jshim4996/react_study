import { useState, useEffect } from "react";

function App() {
  // Cleanup 설명 => componet 가 사라질때 호출 되는 함수를 설정 할수있다.
  const [showing, setShowing] = useState(false);
  const onShwoing = () => setShowing(!showing);

  const Hello = () => {
    // const destroyedFn = () => {
    //   console.log("delete");
    // };
    // const effEctFn = () => {
    //   console.log("created !!");
    //   return destroyedFn;
    // };

    useEffect(function () {
      console.log("hi");
      return function () {
        console.log("by");
      };
    }, []);

    useEffect(() => {
      console.log("hi");
      return () => console.log("by");
    }, []);
    return <h1>Hello</h1>;
  };

  return (
    <div className="App">
      {showing ? <Hello /> : ""}
      <button onClick={onShwoing}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
