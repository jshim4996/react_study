// import Circle from "./Circle";
import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <Title>Hello</Title>
    </Container>
  );
}

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
