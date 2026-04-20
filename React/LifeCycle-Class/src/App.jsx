import React from "react";
class App extends React.Component{
  constructor(){
super()
 
this.state = {
  count:0
}

  }
  componentDidMount(){
    console.log("Component Mounted")
  }


  shouldComponentUpdate(nextProps,nextState){
    if(nextState.count < 5){

      console.log("Component Updated")
     
      return true
    }
    console.log("Hii")
    return false

  }


  componentDidUpdate(){
    console.log("component did update....")
  }

  render(){
    return(
      <>
      <h1>Hello : {this.state.count}</h1>
      <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
      
      </>
    )
  }
}
export default App;