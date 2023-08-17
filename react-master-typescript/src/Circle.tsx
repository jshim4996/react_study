import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

// 인터페이스란 object shape(객체모양) 을 TypeScript 에게 설명 해주는 TypeScript 개념
//
interface CircleProps {
  bgColor: string;
  borderColor?: string; // ? 표시로 값이 없어도 오륲가 발생치 않게 할수있다.
  text?: string;
}

function Circle({ bgColor, borderColor, text = "심준" }: CircleProps) {
  // typeScript 가 초기값을 확인하여 값의 type을 확인한다.
  const [counter, setCounter] = useState(1);
  // <|> 구조를 통해 type을 여러개 지정할수 있다. 하지만 잘 사용되지 않는다.
  const [value, setValue] = useState<number | string>(1);

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} your ${playerObj.age} year old.`;

sayHello({ name: "joon shim", age: 29 });
sayHello({ name: "hi", age: 15 });
