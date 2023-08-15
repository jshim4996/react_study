import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const animation = keyframes`
    0% {
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50% {
        transform: rotate(360deg);
        border-radius: 100px;
    }
    100%{
        transform: rotate(0deg);
        border-radius: 0px;
    }

    /* from{
        transform: rotate(0deg);
        border-radius: 0px;
    }to{
        transform: rotate(360deg);
        border-radius: 100px;
    } */
`;

const Emogi = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  /* 하위 태그 style 을 설정 할수있다.
    hover 기능을 & 표시 로 사용할수있다.
  */
  /*하위 태그 styled 자체를 설정 할수있다  */
  ${Emogi} {
    &:hover {
      font-size: 90px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emogi as="p">😀</Emogi>
      </Box>
      <Emogi as="p">😀</Emogi>
    </Wrapper>
  );
}

export default App;
