import React from 'react';
import './styles/style.css'
import Die from './components/Die'

function App() {

  const [dice, setDice] = React.useState(allNewDice(1, 6, 10))

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function allNewDice(min, max, dice) {
    const newDice = []
    for (let i = 0; i < dice; i++) {
        const element = getRandomInt(min, max)
        newDice.push(element)
    }
    return newDice;
  }

  function newDice() {
    setDice(allNewDice(1, 6, 10))
  } 

  const dices = dice.map(number => {
    return (
        <Die value={number} />
    )
  })

  return (
    <main>
      <div className="border">
        <div className="DieContainer">
            {dices}
        </div>
        <button className="roll-btn" onClick={newDice}>Roll</button>
      </div>
    </main>
  )
}

export default App;
