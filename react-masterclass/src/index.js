import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

// theme 이란 모든 컬러를 담고있는 object 이다.
// 컬러 모드로 사용 값의 프로퍼티 값은 항상 동일해야 한다. => 그렇게 해야 사용하는 변수 값을 바꾸는것으로 전체 페이지에 동일한 영향을 줄수 있기 때문
const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //theme 은 한가지 props 를가진다.
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>
);
