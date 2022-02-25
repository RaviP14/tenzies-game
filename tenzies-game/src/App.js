import React from 'react';
import './styles/style.css'
import Die from './components/Die'

function App() {
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
