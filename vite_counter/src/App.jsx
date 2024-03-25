import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10);

  let increase = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  }

  let decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Counter Application</h1>
      <h2 className='py-2 text-2xl bg-slate-300'>Counter : {count}</h2>
      <button onClick={decrease}>decrease</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={increase}>increase</button>
    </>
  )
}

export default App
