import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

// import { lightTheme, darkTheme } from "./theme";

/*react 18 버전에서 react query 를 사용하기 위해선 npm i @tanstack/react-query 를 사용 하여 설치하여야 합니다. */
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// @types 는 아직 tyeps 를 적용시키지 않은 패키지를 Js 에서 엔징에서 사용할수 있도록 지원 해주는 커뮤니티
//TypeScirpt 는 코드가 실행하기전에 데이터 타입, 파라메터등을 확인하여 알려준다
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>
);
