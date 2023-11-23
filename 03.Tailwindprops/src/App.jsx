
import './App.css'
import Card from './Components/Card'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Css</h1>
      <Card username="Test1" btnText="button 1"/>
      <Card username="Test2" btnText="button 2"/>
    </>
  )
}

export default App