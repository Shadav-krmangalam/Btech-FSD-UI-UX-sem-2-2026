import { useEffect, useRef, useState } from "react";

function App(){
  // const myRef = useRef(null)

  // useEffect(()=>{
  //   myRef.current.focus();
  //   myRef.current.value = "hello predefine value"

  // },[])

    // const [input,setInput]=useState("")
    // const handleChange = (e)=>{
    //   setInput(e.target.value)
    // }
    // const submitForm = (e)=>{
    //   e.preventDefault()
    //   console.log(input)
    // }


      const formRef = useRef("")

      useEffect(()=>{
      //  console.log(formRef.current.value)
      formRef.current.value = "hello Joy"

      },[])
  return (
    <>
     <form >
      <input type="text" defaultValue={"alex"} ref={formRef}/>
      <button type="submit">Submit</button>
     </form>
    {/* <input type="text" ref={myRef} /> */}
    </>
  )
}
export default App;