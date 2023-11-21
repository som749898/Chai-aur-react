import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if(counter <20) {
      return setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if(counter > 0) {
      return setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter {counter}</h1>
      <button disabled={counter >= 20} onClick={addValue}>Increase counter</button>
      <br/>
      <br/>
      <button disabled={counter < 0} onClick={removeValue}>Decrease counter</button>
    </>
  )
}

export default App
