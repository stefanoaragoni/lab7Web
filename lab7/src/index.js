import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import "../src/assets/styles/Main.scss";

import Header from "./components/Header";
import Fetcher from "./components/Fetcher";

const App = () => {

    const [lab, setLab] = React.useState([])
    const [width, setWidth] = React.useState(2)
    const [height, setHeight] = React.useState(2)

	const [contador, setContador] = React.useState(0)

    const NewGame = () => {
		let arrayTemp = []

        fetch("https://maze.juanelcaballo.club/?type=json&w="+width+"&h="+height).then(response => {
        return response.json();
        }).then(responseInJSON => {
			var rowKey = 0
            const res = responseInJSON.map(wall => {
                let stringTemp = [];
                wall.forEach(i => {
                if (i == " ") {
                    stringTemp.push(" ");
                } else {
                    stringTemp.push(i);
                }
                });
                arrayTemp.push({"id":contador,"rowKey":rowKey, "line":stringTemp})
				setContador(contador + 1)
				rowKey = (rowKey + 1)
            });
        });
        setLab(arrayTemp)
    }

	document.onkeydown = (e) => {
		e = e || window.event;

		let labTemporal = [] 
		var position = 0 
		var row = 0

		if (e.key === 'ArrowUp') {

			lab.map(tarjetaTemp =>(
				labTemporal.push(tarjetaTemp.line)
			))
		
			for (var i = 0; i < labTemporal.length; i++) {
				if(labTemporal[i].includes("p")){
					position = labTemporal[i].indexOf("p")
					row = i
				}
			}

			var location = labTemporal[row-1][position]

			if(location == "-" ||  location == "+" ||  location == "|" ){
				console.log("WALL")

			}else{
				if(location == "g"){
					alert("SUCCESS")
					NewGame()
				}else{
					labTemporal[row-1][position] = "p"
					labTemporal[row][position] = " "
					
					setLab(lab => {
						return lab.map(filasTemp => {
						  if (filasTemp.rowKey === row){
							return {...filasTemp, line:labTemporal[row]}
						  }else if(filasTemp.rowKey === row-1){
							return {...filasTemp, line:labTemporal[row-1]}
						  }
						  else{
							return {...filasTemp}
						  }
						})
					  })
				}
			}


		} else if (e.key === 'ArrowDown') {

			lab.map(tarjetaTemp =>(
				labTemporal.push(tarjetaTemp.line)
			))
		
			for (var i = 0; i < labTemporal.length; i++) {
				if(labTemporal[i].includes("p")){
					position = labTemporal[i].indexOf("p")
					row = i
				}
			}

			var location = labTemporal[row+1][position]

			if(location == "-" ||  location == "+" ||  location == "|" ){
				console.log("WALL")

			}else{
				if(location == "g"){
					alert("SUCCESS")
					NewGame()
				}else{
					labTemporal[row+1][position] = "p"
					labTemporal[row][position] = " "
					
					setLab(lab => {
						return lab.map(filasTemp => {
						  if (filasTemp.rowKey === row){
							return {...filasTemp, line:labTemporal[row]}
						  }else if(filasTemp.rowKey === row+1){
							return {...filasTemp, line:labTemporal[row+1]}
						  }
						  else{
							return {...filasTemp}
						  }
						})
					  })
				}
			}

		} else if (e.key === 'ArrowLeft') {

			lab.map(tarjetaTemp =>(
				labTemporal.push(tarjetaTemp.line)
			))
		
			for (var i = 0; i < labTemporal.length; i++) {
				if(labTemporal[i].includes("p")){
					position = labTemporal[i].indexOf("p")
					row = i
				}
			}

			var location = labTemporal[row][position-1]

			if(location == "-" ||  location == "+" ||  location == "|" ){
				console.log("WALL")

			}else{
				if(location == "g"){
					alert("SUCCESS")
					NewGame()
				}else{
					labTemporal[row][position-1] = "p"
					labTemporal[row][position] = " "
					
					setLab(lab => {
						return lab.map(filasTemp => {
						  if (filasTemp.rowKey === row){
							return {...filasTemp, line:labTemporal[row]}
						  }
						  else{
							return {...filasTemp}
						  }
						})
					  })
				}
			}
		} else if (e.key === 'ArrowRight') {

			lab.map(tarjetaTemp =>(
				labTemporal.push(tarjetaTemp.line)
			))
		
			for (var i = 0; i < labTemporal.length; i++) {
				if(labTemporal[i].includes("p")){
					position = labTemporal[i].indexOf("p")
					row = i
				}
			}

			var location = labTemporal[row][position+1]

			if(location == "-" ||  location == "+" ||  location == "|" ){
				console.log("WALL")

			}else{
				if(location == "g"){
					alert("SUCCESS")
					NewGame()
				}else{
					labTemporal[row][position+1] = "p"
					labTemporal[row][position] = " "
					
					setLab(lab => {
						return lab.map(filasTemp => {
						  if (filasTemp.rowKey === row){
							return {...filasTemp, line:labTemporal[row]}
						  }
						  else{
							return {...filasTemp}
						  }
						})
					  })
				}
			}
		}
	}
	
	const color = 'white'

    return(
        <div className="App">
			<Header/>

            <div className="bottom">
                <h4>WxH:</h4>
                <input type="number" id="w" name="w" defaultValue={width} min="1" max="20" onChange={(e) => setWidth(e.target.value)}></input>
                <input type="number" id="h" name="h" defaultValue={width} min="1" max="5" onChange={(e) => setHeight(e.target.value)}></input>
                <button className="button1" onClick={(NewGame)}>NEW GAME</button>

            </div>

            <Fetcher lab={lab}/>

        </div>        
    )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
