import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
`;

// 인터페이스란 object shape(객체모양) 을 TypeScript 에게 설명 해주는 TypeScript 개념
interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
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
