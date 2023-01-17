import { useState } from "react"
import { AppBar } from "./components/appbar"

const App = () => {
  const [counter, setcounter] = useState(0)
  return (
    <center>
      <div>
        <AppBar />
        <h2 className="m-4">{counter}</h2>
        <optgroup>
          <h1>hello</h1>
        </optgroup>
        <button className="m-4 btn btn-success" onClick={() => setcounter(counter + 1)}><h1>+</h1></button>
        <button className="btn btn-danger" onClick={() => setcounter(counter - 1)}><h1>-</h1></button>
      </div >
    </center>
  )
}

export default App
