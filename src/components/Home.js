// Home.js
import React from "react";
import "../App.css";
const Home = () => {
  return (
    <div className="video-background">
      <video className="video-background-content" loop autoPlay muted>
        <source src="8.mp4" type="video/mp4" />
      </video>
      <h1 className="titleOfHomePage">Fermentatie wijn azijn productie</h1>
    </div>
  );
};

export default Home;
