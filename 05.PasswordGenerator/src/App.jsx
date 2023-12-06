import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const passwordRef = useRef(null);

  const copyHandler = () => {
    passwordRef?.current?.select();
    passwordRef?.current?.setSelectionRange(0,3);
    navigator.clipboard.writeText(password);
  }

  const generatePassword = useCallback(() => {
    let result = '';
    let characters = "";
    if(character && number) {
      characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}|;:'",<.>/?`;
    } else if(character) {
      characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[{]}|;:'",<.>/?`;
    } else if(number) {
      characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
    } else {
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    }

    let count = 0;
    while (count < length) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
      count ++;
    }
    return result;
  }, [length, number, character, setPassword]);

  useEffect(() => {
    const newPassword = generatePassword();
    setPassword(newPassword);
  }, [length, number, character, setPassword])

  console.log("Password", password);
  console.log("Length", length);
  console.log("Character", character);
  console.log("Number", number);

  return (
    <div className='w-full h-screen bg-black text-white'>
      <h1 className='text-3xl text-center pt-8 p-4 text-white'>Password Genarator</h1>
      <div className='text-center'>
        <input ref={passwordRef} value={password} type='text' className='rounded-xl mr-4 p-1 pl-2 text-black w-100'/>
        <button onClick={copyHandler} style={{border: "1px solid white"}} className='text-white bg-slate-400 inline-block p-1 '>Copy</button>
      </div>
      <div className="flex flex-wrap m-2 flex-1 justify-center mt-4">
        <input onChange={(e) => setLength(e.target.value)}  type='range' min={0} max={20} defaultValue={length} className='text-center inline-block' />
        <div className='m-2'>length ({length})</div>
        <label className='flex'>
          <input onChange={() => setNumber(prev => !prev)} checked={number} type='checkbox' className='m-2 mr-1' />
          <div className='mt-2'>Number</div>
        </label>
        <label className='flex'>
          <input onChange={() => setCharacter(prev => !prev)} checked={character} type='checkbox' className='m-2 mr-1' />
          <div className='mt-2'>Character</div>
        </label>
      </div>
    </div>
  )
}

export default App
