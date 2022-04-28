import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/Main.scss'

import Header from './components/Header'
import Fetcher from './components/Fetcher'

function App() {
  const [lab, setLab] = React.useState([])
  const [width, setWidth] = React.useState(2)
  const [height, setHeight] = React.useState(2)

  const [contador, setContador] = React.useState(0)

  const NewGame = () => {
    const arrayTemp = []

    fetch(`https://maze.juanelcaballo.club/?type=json&w=${width}&h=${height}`).then((response) => response.json()).then((responseInJSON) => {
      let rowKey = 0
      responseInJSON.map((wall) => {
        const stringTemp = []
        wall.forEach((i) => {
          if (i === ' ') {
            stringTemp.push(' ')
          } else {
            stringTemp.push(i)
          }
        })
        arrayTemp.push({ id: contador, rowKey, line: stringTemp })
        setContador(contador + 1)
        rowKey += 1

        return 0
      })
    })
    setLab(arrayTemp)
  }

  document.onkeydown = (u) => {
    const u2 = u || window.event

    const labTemporal = []
    let position = 0
    let row = 0

    if (u2.key === 'ArrowUp') {
      lab.map((tarjetaTemp) => (
        labTemporal.push(tarjetaTemp.line)
      ))

      for (let i = 0; i < labTemporal.length; i += 1) {
        if (labTemporal[i].includes('p')) {
          position = labTemporal[i].indexOf('p')
          row = i
        }
      }
      const location = labTemporal[row - 1][position]

      if (location === '-' || location === '+' || location === '|') {
        // empty
      } else if (location === 'g') {
        alert('SUCCESS')
        NewGame()
      } else {
        labTemporal[row - 1][position] = 'p'
        labTemporal[row][position] = ' '

        setLab(() => lab.map((filasTemp) => {
          if (filasTemp.rowKey === row) {
            return { ...filasTemp, line: labTemporal[row] }
          } if (filasTemp.rowKey === row - 1) {
            return { ...filasTemp, line: labTemporal[row - 1] }
          }
          return { ...filasTemp }
        }))
      }
    } else if (u2.key === 'ArrowDown') {
      lab.map((tarjetaTemp) => (
        labTemporal.push(tarjetaTemp.line)
      ))

      for (let e = 0; e < labTemporal.length; e += 1) {
        if (labTemporal[e].includes('p')) {
          position = labTemporal[e].indexOf('p')
          row = e
        }
      }

      const location1 = labTemporal[row + 1][position]

      if (location1 === '-' || location1 === '+' || location1 === '|') {
        // empty
      } else if (location1 === 'g') {
        alert('SUCCESS')
        NewGame()
      } else {
        labTemporal[row + 1][position] = 'p'
        labTemporal[row][position] = ' '

        setLab(() => lab.map((filasTemp) => {
          if (filasTemp.rowKey === row) {
            return { ...filasTemp, line: labTemporal[row] }
          } if (filasTemp.rowKey === row + 1) {
            return { ...filasTemp, line: labTemporal[row + 1] }
          }
          return { ...filasTemp }
        }))
      }
    } else if (u2.key === 'ArrowLeft') {
      lab.map((tarjetaTemp) => (
        labTemporal.push(tarjetaTemp.line)
      ))

      for (let a = 0; a < labTemporal.length; a += 1) {
        if (labTemporal[a].includes('p')) {
          position = labTemporal[a].indexOf('p')
          row = a
        }
      }

      const location2 = labTemporal[row][position - 1]

      if (location2 === '-' || location2 === '+' || location2 === '|') {
        // empty
      } else if (location2 === 'g') {
        alert('SUCCESS')
        NewGame()
      } else {
        labTemporal[row][position - 1] = 'p'
        labTemporal[row][position] = ' '

        setLab(() => lab.map((filasTemp) => {
          if (filasTemp.rowKey === row) {
            return { ...filasTemp, line: labTemporal[row] }
          }
          return { ...filasTemp }
        }))
      }
    } else if (u2.key === 'ArrowRight') {
      lab.map((tarjetaTemp) => (
        labTemporal.push(tarjetaTemp.line)
      ))

      for (let o = 0; o < labTemporal.length; o += 1) {
        if (labTemporal[o].includes('p')) {
          position = labTemporal[o].indexOf('p')
          row = o
        }
      }

      const location3 = labTemporal[row][position + 1]

      if (location3 === '-' || location3 === '+' || location3 === '|') {
        // empty
      } else if (location3 === 'g') {
        alert('SUCCESS')
        NewGame()
      } else {
        labTemporal[row][position + 1] = 'p'
        labTemporal[row][position] = ' '

        setLab(() => lab.map((filasTemp) => {
          if (filasTemp.rowKey === row) {
            return { ...filasTemp, line: labTemporal[row] }
          }
          return { ...filasTemp }
        }))
      }
    }
  }

  return (
    <div className="App">
      <Header />

      <div className="bottom">
        <h4>WxH:</h4>
        <input type="number" id="w" name="w" defaultValue={width} min="1" max="20" onChange={(e) => setWidth(e.target.value)} />
        <input type="number" id="h" name="h" defaultValue={width} min="1" max="5" onChange={(e) => setHeight(e.target.value)} />
        <button type="button" className="button1" onClick={(NewGame)}>NEW GAME</button>

      </div>

      <Fetcher lab={lab} />

    </div>
  )
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
