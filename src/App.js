import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import MainForm from "./components/MainForm";

class App extends Component {
  render() {
    return (
      <Container textAlign="center">
        <MainForm />
      </Container>
    );
  }
}

export default App;
