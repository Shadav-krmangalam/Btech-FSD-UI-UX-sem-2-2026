import React from "react";
import Child from "./Components/Child";
class App extends React.Component{
 
  constructor(){
    super()
    this.state = {
      count:0
    }

  //   increment =()=>{
  //   this.setState({count:this.state.count + 1})

  // }

  }

 

  render(){
    return (
  <>
    <h1>Hello Class Component</h1>
    <Child/>
    <span>{this.state.count}</span>
    <br />
    <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
  
  </>
  )
  }

}
export default App;