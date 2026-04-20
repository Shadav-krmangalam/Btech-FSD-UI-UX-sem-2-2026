import { useState } from 'react';
import {Addition,Child} from './components/Child'
import Component1 from './components/Component1';

function App(){
  // const [count,setCount] = useState("One Way Binding")

  // const [count,setCount] = useState(0)
  // const increment = ()=>{
  //   setCount(count+1)
  // }

  const [name,setName] = useState("Alex")

  return (
    <>

      {/* <h1>Hello students</h1>
    <p>Hello para</p>
    <Addition />
    <Child val={count} name={"Students"}/> */}
    {/* <h1>Counter</h1>
    <button>-</button>
    <br />
    <span>{count}</span>
    <br />  
    <button onClick={increment}>+</button> */}

    <h1>Parent Component</h1>
    <Component1 name3={name} value={2}/>
    

    
    </>
  )

}


export default App;