import React from "react";
import "../assets/styles/Main.scss";

function Fetcher({ lab }){
  console.log(lab)
  return (
    <div className="container2">
      <div className = "laberinto">
        {lab.map(tarjetaTemp =>(
          <h1 key={tarjetaTemp.id}>{tarjetaTemp.line}</h1>
        ))}
      </div>
    </div>
  )
}
export default Fetcher;