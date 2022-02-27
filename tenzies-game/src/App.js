import React from 'react';
import './styles/style.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = React.useState(allNewDice(1, 6, 10))
  const [tenzies, setTenzies] = React.useState(false)

  //useEffect is used to keep 2 states in sync.
  React.useEffect(() => {
    const isTrue =  dice.every(die => die.isHeld)
       const value1 = dice[0].value
       const sameValue = dice.every(die => die.value === value1)
       if (isTrue && sameValue) {
           setTenzies(true)
           console.log("You won!")
       }
}, [dice])

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function allNewDice(min, max, dice) {
    const newDice = []
    for (let i = 0; i < dice; i++) {
      newDice.push(createNewDie(min, max))
    }
    return newDice;
  }

  function createNewDie(min, max) {
    const element = getRandomInt(min, max)
    const code = nanoid()
    return { value: element, isHeld: false, id: code }
  }

  function rollNewDice() {
    setDice(oldDice => {
      return oldDice.map(die => die.isHeld ? die : createNewDie(1, 6))
  })
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
      {tenzies && <Confetti />}
      <div className="border">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="DieContainer">
            {dices}
        </div>
        <button className="roll-btn" onClick={rollNewDice}>{tenzies ? "New Game" : "Roll"}</button>
      </div>
    </main>
  )
}

export default App;
