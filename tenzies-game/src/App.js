import React from 'react';
import './styles/style.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'

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
      const code = nanoid()
      newDice.push({ value: element, isHeld: false, id: code })

    }
    return newDice;
  }

  function newDice() {
    setDice(allNewDice(1, 6, 10))
  }

  function holdDice(id) {
    setDice(oldDice => {
      return oldDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die )
  })
}

  const dices = dice.map(die => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
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
