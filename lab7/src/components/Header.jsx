import React from "react";
import "../assets/styles/Main.scss";
import { css } from '@emotion/react'

{/*(10 puntos) Por configurar y utilizar un loader de imágenes*/}
import reactImg from "../assets/static/sabrina.jpg";

const Header = () => {
  return (
    <div className="container">
      <img src={reactImg} alt="Sabrina" />
      <h1>Sabrina's Labyrinth</h1>
      <div className="break"></div>

      
      {/*(20 puntos) Por configurar y utilizar un procesador de css como linaria o emotion*/}
      <div css={css({
        margin: 10,
        padding: 10
      })}>
        Stefano Aragoni - 20261
      </div>

    </div>
  );
};

export default Header;