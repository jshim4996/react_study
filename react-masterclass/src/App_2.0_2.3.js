import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  colro: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

// attr 속석을 설정 할 수있다.
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Btn>Log in</Btn>
      {/* as 사용 하여 태그를 사용받아 사용 하는것이 아닌 태그 속성만을 바꾸어 사용할수있다. */}
      <Btn as="a" href="/">
        Log in
      </Btn>
      <Input></Input>
      <Input></Input>
      <Input></Input>
    </Father>
  );
}

export default App;
