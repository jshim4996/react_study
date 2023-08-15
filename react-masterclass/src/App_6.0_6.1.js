import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  //props 를 사용하여 style에 사용할 값을 전달받는다.
  background-color: ${(props) => props.bgcolor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

// const BoxTwo = styled.div`
//   background-color: tomato;
//   width: 100px;
//   height: 100px;
// `;

//styled. 는 반드시 HTML 태그를 사용 하며 back tick 안에만 style 를 입력해야 한다.
const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <Box bgcolor="teal">
        <Text>123</Text>
      </Box>
      <Box bgcolor="tomato"></Box>
      <Circle bgcolor="black"></Circle>
    </Father>
  );
}

export default App;
