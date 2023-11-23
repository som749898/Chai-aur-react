import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor] = useState("slate");
  return (
    <div className={`w-full h-screen bg-${color}-800 duration-200`}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-400'>Red</button>
          <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-400'>Blue</button>
          <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-400'>Green</button>
        </div>
      </div>
    </div>
  )
}
export default App