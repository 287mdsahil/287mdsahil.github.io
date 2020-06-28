import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//import introVideo from "./res/media/videos/FourierOfS/1440p60/FourierOfS.mp4";
import profileImg from "./img/profile_img_bw.png";

function ProfileImg(props) {
  return (
    <img
      src={profileImg}
      alt=""
      style={{
        maxWidth: "70vw",
        maxHeight: "90vh",
        margin: 30
      }}
    />
  );
}

function NavigationBar(props) {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{
        maxWidth: "100%",
        background: "black !important",
        margin: 0
      }}
    >
      <div style={{ margin: "auto" }}>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#aboutMe">About me</Nav.Link>
          <Nav.Link href="#blogs">Blogs</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}

function App() {
  return (
    <Container
      className="App"
      style={{ margin: 0, padding: 0, maxWidth: "100vw" }}
    >
      <NavigationBar />
      <Row style={{ justifyContent: "center" }}>
        <ProfileImg />
      </Row>
      <Row>
        <h1 style={{ margin: "auto", color: "#BBBBBB" }}>Hi, I am Sahil</h1>
      </Row>
      {/*<Row>
        <center>
          <video
            autoPlay
            loop
            muted
            style={{
              maxWidth: "100vw",
              maxHeight: "90vh",
              margin: "auto"
            }}
          >
            <source src={introVideo} type="video/mp4" />
          </video>
        </center>
      </Row>*/}
    </Container>
  );
}

export default App;
