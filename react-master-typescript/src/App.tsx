// import Circle from "./Circle";
import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";

//createGlobalStyle 전역 스코프에 스타일을 적용 시켜줌
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');
 html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body {
  font-family: 'Oswald', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};

}
a{
  text-decoration: none;
  color: inherit
  }
`;

function App() {
  /* Fragment : react 에서 제공하는  부모 없이 서로 붙어 있는 컴포넌트를 붙어 있게 해주는 역활을 한다 없다면 불필요한 div 가 생성 될수 있다.*/
  return (
    <>
      <GlobalStyle />
      <Router />
      {/* 현재 사용 중인 react query 를 확인 및 조작 할수 있는 develop tool 제공 기능 */}
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

/* 리액트 마스터 3.6 과정 */
// const Container = styled.div`
//   background-color: ${(props) => props.theme.bgColor};
// `;
// const Title = styled.h1`
//   color: ${(props) => props.theme.textColor};
// `;

// <Container>
//   <Title>Hello</Title>
// </Container>

// const [value, setValue] = useState("");

// const onChange = (event: React.FormEvent<HTMLInputElement>) => {
/*   react 에선 target 대신 curre ntTarget 을 사용한다.
     console.log(event.currentTarget.value);*/
//   const {
//     currentTarget: { value },
//   } = event;
//   setValue(value);
// };

// const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   console.log("hello", value);
// };

/*  typeScirpt 기초 학습 3.0 ~ 3.5 학습 */
// <form onSubmit={onSubmit}>
//   <input
//     value={value}
//     onChange={onChange}
//     type="text"
//     placeholder="user name"
//   />
//   <button>Log in</button>
// </form>

/*  typeScirpt 기초 학습 3.0 ~ 3.4 */
// <Circle borderColor="black" bgColor="teal" />
// <Circle bgColor="tomato" text="곽예지" />

export default App;
