import React from "react";
import "../App.css";
import "./page.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSpring, animated } from "react-spring";

import profileImg from "../img/profile_img.jpg";

function ProfileImg(props) {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={animationProps}>
      <img
        src={profileImg}
        alt=""
        style={{
          maxWidth: "70vw",
          maxHeight: "90vh",
          margin: 30
        }}
      />
    </animated.div>
  );
}

function AboutMeTextShort(props) {
  const animationProps = useSpring({
    margin: "auto 30px",
    opacity: 1,
    from: { opacity: 0 }
  });
  return (
    <animated.div style={animationProps}>
      <h1>
        Hi,
        <br />I am <span style={{ color: "#dddddd" }}>Sahil</span>
      </h1>
      <span>Open source enthusiast</span>
    </animated.div>
  );
}

function HomePage(props) {
  return (
    <Container className="page" style={{ margin: "auto 20%", padding: 0, maxWidth: "100vw" }}>
      <Row style={{ justifyContent: "center" }}>
        <ProfileImg />
        <AboutMeTextShort />
      </Row>
    </Container>
  );
}

export default HomePage;
