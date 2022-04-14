import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import "../src/assets/styles/Main.scss";

import Header from "./components/Header";
import Fetcher from "./components/Fetcher";

const App = () => {

    const [lab, setLab] = React.useState([])
    const [wTemp, setW] = React.useState(2)
    const [hTemp, setH] = React.useState(2)

	const [contador, setContador] = React.useState(0)

    const NewGame = () => {
		let arrayTemp = []

        fetch("https://maze.juanelcaballo.club/?type=json&w="+wTemp+"&h="+hTemp).then(response => {
        return response.json();
        }).then(responseInJSON => {
            const res = responseInJSON.map(wall => {
                let stringTemp = "";
                wall.forEach(i => {
                if (i == " ") {
                    stringTemp = stringTemp + " ";
                } else {
                    stringTemp = stringTemp + i;
                }
                });
                arrayTemp.push({"id":contador, "line":stringTemp})
				setContador(contador+1)
            });
        });
        setLab(arrayTemp)
    }

	console.log(wTemp,hTemp)
	console.log(lab)
    return(
        <div className="App">
			<Header/>

            <div className="bottom">
                <h4>WxH:</h4>
                <input type="number" id="w" name="w" defaultValue={wTemp} min="1" max="6" onChange={(e) => setW(e.target.value)}></input>
                <input type="number" id="h" name="h" defaultValue={wTemp} min="1" max="6" onChange={(e) => setH(e.target.value)}></input>
                <button className="button1" onClick={(NewGame)}>NEW GAME</button>
            </div>

            <div className="container2">
				<div className = "laberinto">
					{lab.map(tarjetaTemp =>(
						<h1 key={tarjetaTemp.id}>{tarjetaTemp.line}</h1>
					))}
				</div>
			</div>

        </div>        
    )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
