import { useState } from "react";

function App(){
  const [formData,setFormData] = useState({
    email:"",password:""
  })
  const handleEmail = (e)=>{
    setFormData((prev)=>({
      ...prev,
      email:e.target.value
    }))
  }
    const handlePassword = (e)=>{
    setFormData((prev)=>({
      ...prev,
      password:e.target.value
    }))
  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!formData.email.includes("@krmangalam.edu.in")){
      alert("Please enter correct email")
      return;
    }

    if(formData.password.length < 8){
      alert("Password must be equal or greater than 8 digit")
      return;
    }

    console.log(formData)
    setFormData({
    email:"",password:""
  })

  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="email" value={formData.email} onChange={handleEmail} />
      <input type="password" placeholder="password" value={formData.password} onChange={handlePassword}/>
      <button>Submit</button>
    </form>
    </>
  )
}
export default App;