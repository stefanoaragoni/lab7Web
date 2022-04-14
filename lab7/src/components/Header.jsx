import React from "react";
import "../assets/styles/Main.scss";
import reactImg from "../assets/static/sabrina.jpg";

const Header = () => {
  return (
    <div className="container">
      <img src={reactImg} alt="Sabrina" />
      <h1>Sabrina's Labyrinth</h1>
      <div className="break"></div>
    </div>
  );
};

export default Header;