import { useEffect, useState } from "react";
import axios from "axios"

function App(){
  const API = "https://api.themoviedb.org/3/discover/movie?api_key=857696c41ec9ba15dd7185a7b50478e0&page=1"

  const [data,setData] =useState([])


  useEffect(()=>{
    async function fetchingFunction(){
      // let response = await fetch(API)
      // let data =await response.json()
      // console.log(data)

    try{
        let response = await axios.get(API)
      console.log(response)
      setData(response.data.results)

    }catch(err){
      alert(err)
      console.log(err)

    }
    }

    fetchingFunction();

  },[])

  return (
    <div className="flex flex-wrap gap-5">
    <h1>Trending Movies</h1>
    {data.map((element)=>{
      return (
        <>
        <div className="w-50 rounded-xl bg-gray-50 m-5 p-10">
          <img src="" alt="" />
          <span>{element.id}</span>
          <h4>{element.title}</h4>
          <p>{element.overview}</p>
        </div>

        </>
      )
    })

    }
    </div>
  )
}

export default App;
