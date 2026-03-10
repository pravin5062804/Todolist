import React, { useState } from 'react'
import "./stylesheets/form.css"
import axios from "axios"


const Create = () => {
    const [task, setTask] = useState();
    const handleAdd =(e)=>{
        axios.post("http://localhost:3000/add",{task:task})
        .then(ressult =>{location.reload()})
        .catch(err=>console.log(err));
    

    }
  return (
    <div className='create-form'>
      <input type='text' name='' onChange={(e)=>{
       setTask(e.target.value) 
      }}></input>
      <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
