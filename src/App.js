import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import introVideo from "./res/media/videos/FourierOfS/1440p60/FourierOfS.mp4";
import profileImg from "./img/profile_img_bw.png";

function App() {
  return (
    <Container className="App">
      <Row>
        <center>
          <video
            autoPlay
            loop
            muted
            style={{
              maxWidth: "100vw",
              maxHeight: "90vh"
            }}
          >
            <source src={introVideo} type="video/mp4" />
          </video>
        </center>
      </Row>
      <Row>
        <center>
          <img
            src={profileImg}
            alt=""
            style={{
              maxWidth: "70vw",
              maxHeight: "90vh",
              margin: "auto"
            }}
          />
        </center>
      </Row>
    </Container>
  );
}

export default App;
