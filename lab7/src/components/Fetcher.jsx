import React from "react";
import "../assets/styles/Main.scss";

function Fetcher({ lab, contador }){
  console.log(lab)
  return (
    <div className="container2">
      <div className = "laberinto">
        <h1>{contador}</h1>
        {lab.map(tarjetaTemp =>(
          <h1 key={tarjetaTemp.id}>{tarjetaTemp.line}</h1>
        ))}
      </div>
    </div>
  )
}
export default Fetcher;