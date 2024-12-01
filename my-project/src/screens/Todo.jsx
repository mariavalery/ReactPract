import React,{useState} from 'react'
import TodoList from '../Data/TodoList'
export default function Todo() {
  const [name,setName]=useState('')
  const[todolist,setTodolist]=useState([])
  console.log(name)
  const handleSubmit=()=>{
    setTodolist([...todolist,name])
    setName('');
  }
  console.log(todolist)
  return (
    <div className='m-3 '>
      <h1 className='md:w-1/2 text-center'>Todo</h1>
      <p className='md:w-1/2'>A classic task management app that allows users to create, read, update, and delete (CRUD) tasks. This project is perfect for mastering React’s state management and component structure, as well as practicing with forms and event handling.</p>
      <div className='my-3'>
        <input type='text' className="block w-50 px-3 py-2 my-2 border border-gray-300 rounded-md sm:text-sm" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button type='submit' onClick={handleSubmit}><b>Submit</b></button>
        {todolist.map((todo)=>{
          return (
            <TodoList name={todo} todolist={todolist} setTodolist={setTodolist}/>
          )
        })}
      </div>
      
    </div>
  )
}
