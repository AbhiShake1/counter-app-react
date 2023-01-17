import { useState } from "react"

const App = () => {
  const [counter, setcounter] = useState(0)
  return (
    <center>
      <div>
        <h2>{counter}</h2>
        <button onClick={() => setcounter(counter + 1)}><h1>+</h1></button>
        <button onClick={() => setcounter(counter - 1)}><h1>-</h1></button>
      </div >
    </center>
  )
}

export default App
