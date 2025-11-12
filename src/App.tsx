import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  const resetCount = () => setCount(0)

  return (
    <>
      <div>
        <h1>Hello!</h1>
        <h2>{count}</h2>
      </div>
      <div>
        <button onClick={handleClick}
        >☺</button>
        <button onClick={resetCount}>(..)</button>
      </div>
    </>
  )
}

export default App
