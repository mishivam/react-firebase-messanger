import React from "react";
import "./App.css";
import MainComponent from "./MainComponent";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    height: "100vh",
    background: "#f1f1f1",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <img alt='facebook-messagner-logo' src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=80&h=80"></img>
        <MainComponent />
      </Container>
    </div>
  );
}

export default App;
