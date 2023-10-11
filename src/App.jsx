import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    counter = counter - 1
    setCounter(counter - 1)
  }

  if (addValue += 20){
    console.log(true);
  }else{
    console.log(false);
  }


  return (
    <>
      <h2>Counter value:  {counter}</h2>

      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}>remove value{counter}</button>

    </>
  )
}

export default App
