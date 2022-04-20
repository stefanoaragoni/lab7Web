import React from "react";
import "../assets/styles/Main.scss";
import { css } from '@emotion/react'
import ReactAudioPlayer from 'react-audio-player';

{/*(10 puntos) Por configurar y utilizar un loader de imágenes*/}
import reactImg from "../assets/static/sabrina.jpg";
import reactImg2 from "../assets/static/hell2.svg";
import ahs from "../assets/static/ahs.mp3";

const Header = () => {
  return (
    <div className="container">
      <img src={reactImg} alt="Sabrina" />
      <h1>Sabrina's Labyrinth</h1>
      <img src={reactImg2} alt="Hell" />

      <div className="break"></div>

      
      {/*(20 puntos) Por configurar y utilizar un procesador de css como linaria o emotion*/}
      <div css={css({
        margin: 10,
        padding: 10
      })}>
        <ReactAudioPlayer 
          src={ahs}
          autoPlay
          loop
          controls
				/>
      </div>



    </div>
  );
};

export default Header;