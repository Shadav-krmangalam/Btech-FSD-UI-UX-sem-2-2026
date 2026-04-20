import { useState } from "react";
import Child from "./Components/Child";

function App(){
  const [count,setCount] = useState(0)
  const increment = ()=>{
   
    setCount(count+1)
  }
  return (
    <>
    <h1>Hello</h1>

    <Child count={count}/>
    <button onClick={increment}>+</button>
    
    </>
  )
}
export default App;