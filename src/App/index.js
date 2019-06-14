import React, { Component } from "react";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage";
import styled, { css } from "styled-components";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";

const MyButton = styled.div`
  color: green;
  ${props =>
    props.primary &&
    css`
      color: palevioletred;
    `}
`;

const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar />
        <WelcomeMessage name="CryptoDash" />
        <MyButton> Hello </MyButton>
        <MyButton primary> Hello </MyButton>
        <TomatoButton> Hello </TomatoButton>
      </AppLayout>
    );
  }
}

export default App;
