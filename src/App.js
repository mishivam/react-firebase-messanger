import React from "react";
import "./App.css";
import MainComponent from "./MainComponent";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Container size='md'>
        <h1>React-firebase Project 2 🚀 </h1>
        <br/>
        <MainComponent />
      </Container>
    </div>
  );
}

export default App;
