import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if(counter <20) {
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
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
