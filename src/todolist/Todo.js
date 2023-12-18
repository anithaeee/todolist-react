import React, { useState } from 'react'
import '../todolist/todo.css';
import 'bootstrap/dist/css/bootstrap.css';
const Todo = () => {
    const[Task,setTask]= useState([]);
    const changeHandler = e=> {
        setTask(e.target.value)
    }
    const submitHandler = e=>{
        e.preventDefault();
        console.log(Task);
    }
  return (
    <div className='container'>
            <div className='card-text'>
              <h1 className='heading'style={{padding:'3rem'}}>TODO LISI</h1>
           </div>
           <div className='btn'>
             <button className='button'style={{backgroundColor:'blue',borderRadius:'6px',color:'white',height:'35px',width:'100px'}}>Add Task</button>
             <button className='button1'style={{backgroundColor:'blue',borderRadius:'6px',color:'white',height:'35px',width:'100px'}}>All</button>
           </div>
           <div className='card' style={{height:'20rem',width:'40rem',marginRight:'80rem'}}>
            <form onSubmit={submitHandler}>
            <input type='text' name='Task' placeholder='create a react project'value={Task} onChange={changeHandler}></input>
            <input type='submit' placeholder='create a react project'></input>
            </form>
           </div>
    </div>
  )
}

export default Todo;