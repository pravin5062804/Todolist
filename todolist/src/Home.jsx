import React, { useEffect, useState } from 'react'
import Create from './Create'
import "./stylesheets/App.css"
import { BsCircle } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import axios from 'axios'

const Home = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/get")
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleEdit=(id)=>{
       axios.put(`http://localhost:3000/update/${id}`)
        .then(result => setTodos(result.data),location.reload())
        .catch(err => console.log(err))
    }

    const handleDelete = (id)=>{
        axios.put(`http://localhost:3000/delete/${id}`)
        .then(result=>location.reload())
        .catch(err=>console.log(err)
        )

    }



    return (
        <div className='home'>
            <h2>Todo List</h2>
            <Create></Create>
            {
                todos.length === 0 ?
                    <div> <h2>No Record </h2></div> :
                    todos.map(todo => (
                        <div key={todo._id} className='task'>
                            <div className='msgbox' onClick={()=>handleEdit(todo._id)}>
                                {todo.done?<FaCheckCircle className='icon'/>:<BsCircle className='icon'/>}
                                <p className={todo.done?"line-thourgh":""}>{todo.task}</p>
                                <BsFillTrash3Fill className='icon' onClick={()=>handleDelete(todo._id)}/>
                            </div>
                            
                        </div>
                    ))

            }
        </div>
    )
}

export default Home
