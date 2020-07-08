import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HomePage from "./pages/HomePage";
import FourierPage from "./pages/Fourier";

function App() {
  return (
    <Container
      className="App"
      style={{ margin: 0, padding: 0, maxWidth: "100vw" }}
    >
      <Row style={{ justifyContent: "center" }}>
        <HomePage />
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <FourierPage />
      </Row>
    </Container>
  );
}

export default App;
