import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
  }
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1> Counter Project</h1>
      <h3> Counter Value: {counter}</h3>
      <button onClick={addValue} type="button">+</button>
      <button onClick={removeValue}>-</button>
    </>
  )
}

export default App
