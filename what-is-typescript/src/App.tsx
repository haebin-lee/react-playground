import { useState } from "react";
import Circle from "./Circle";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;

  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit", value);
  };

  return (
    <Container>
      <H1>Hello</H1>
      {/* <Circle bgColor="teal" borderColor="yellow" />
      <Circle bgColor="tomato" /> */}

      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </Container>
  );
}

export default App;
