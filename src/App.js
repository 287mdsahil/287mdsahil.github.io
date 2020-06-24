import React from "react";

import introVideo from "./res/media/videos/FourierOfS/1440p60/FourierOfS.mp4";

function App() {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "cover",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <source src={introVideo} type="video/mp4" />
      </video>
      test
    </div>
  );
}

export default App;
