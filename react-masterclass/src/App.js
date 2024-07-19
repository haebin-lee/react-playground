import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  to {
    transform: rotate(360deg);
    border-radius: 100px;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Emoji}: hover {
    font-size: 98px;
  }
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;
function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
      {/* <Box>
        <Emoji>Happy</Emoji>
      </Box>
      <Emoji>Sad</Emoji> */}
    </Wrapper>
  );
}

export default App;
