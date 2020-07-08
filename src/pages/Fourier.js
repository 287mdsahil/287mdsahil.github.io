import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import fourierOfS from "../res/media/videos/FourierOfS/1000p60/FourierOfS.mp4";

function FourierPage(props) {
  return (
    <Container className="page">
      <center>
        <video
          autoPlay
          loop
          muted
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            margin: "auto"
          }}
        >
          <source src={fourierOfS} type="video/mp4" />
        </video>
      </center>
    </Container>
  );
}

export default FourierPage;
