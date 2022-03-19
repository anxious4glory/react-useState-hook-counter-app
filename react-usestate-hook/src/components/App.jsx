import React, {useState} from "react";



function App() {



const [state, setState] = useState(0)



let increase = () => {

  setState(state + 1)
  
}
let decrease = () => {

  setState(state - 1)
  
}


  return( <div className="container">
    <h1>{state}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>)
}

export default App;
