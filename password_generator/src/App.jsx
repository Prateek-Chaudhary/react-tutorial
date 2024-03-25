import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  let [length, setLength] = useState(8);
  let [isNumber, setIsNumber] = useState(false);
  let [isSpecial, setIsSpecial] = useState(false);
  let [password, setPassword] = useState("");

  let generatePassword = useCallback(() => {
    let pass = "";
    let str = "ZAQXSWCDEVFRBGTNHYMJUKILOPzaqxswcdevfrbgtnhymjukilop";
    if (isNumber) str += "1234567890";
    if (isSpecial) str += "!@#$%&(){}][?/_-><+"
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.round(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, isNumber, isSpecial, setPassword]);

  let passwordRef = useRef(null);

  let copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <>
      <div className="bg-blue-300 flex flex-col items-center w-[30rem] m-auto px-2 py-6 mt-44 rounded-xl">
        <div
          className='text-3xl text-blue-950 mb-4'
        >Password Generator</div>
        <div
          className='mb-3'
        >
          <input
            type="text"
            className='py-2 px-2 w-72 rounded-l-lg text-black placeholder:text-black text-lg'
            placeholder='Password'
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            className='bg-blue-600 px-4 py-2 text-lg rounded-r-lg hover:bg-blue-500 active:bg-blue-700'
            onClick={copyToClipboard}
          >Copy</button>
        </div>
        <div>
          <input
            type="range"
            min={8}
            max={32}
            value={length}
            id='range'
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label
            htmlFor="range"
            className='mx-2'
          >Length : {length}</label>

          <input
            type="checkbox"
            className='w-4 h-4 m-1'
            id='number'
            onChange={() => setIsNumber((prev) => !prev)}
          />
          <label htmlFor="number">Numbers</label>

          <input
            type="checkbox"
            className='w-4 h-4 m-1'
            id='symbol'
            onChange={() => setIsSpecial((prev) => !prev)}
          />
          <label htmlFor="symbol">Symbols</label>
        </div>
      </div>
    </>
  )
}

export default App
