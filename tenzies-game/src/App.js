import React from 'react';
import './styles/style.css'
import Die from './components/Die'

function App() {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function allNewDice(min, max, dice) {
    const array = []
    for (let i = 0; i < dice; i++) {
        const element = getRandomInt(min, max)
        array.push(element)
    }
    return array;
  }

  return (
    <main>
      <div className="border">
      <div className="DieContainer">
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
      </div>
    </main>
  )
}

export default App;
