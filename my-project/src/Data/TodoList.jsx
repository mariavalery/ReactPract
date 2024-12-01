import React, { useState } from 'react'

function TodoList({name,todolist,setTodolist}) {
  const[isEditing,setIsEditing]=useState(false)
  const[newName,setNewName]=useState(name)
  
  const handleSave=()=>{
    let todolistUpdated=todolist.map((item)=>(item === name?newName:item))
    setTodolist(todolistUpdated)
    setIsEditing(false)
  }
  const handleCancel=()=>{
    setNewName(name)
    setIsEditing(false)
  }

  const handleEdit = () =>{
    setIsEditing(true)
  }
  const handleDelete=(clickedname)=>{
    let todoFilteredList=todolist.filter(item=>item!==clickedname)
    setTodolist(todoFilteredList)
  }
  return (
    <div>
      {isEditing?(<>
        <input type='text' className="block w-50 px-3 py-2 border border-gray-300 rounded-md sm:text-sm my-2" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
        <button className='w-30 text-white bg-blue-500 mx-4 px-5' onClick={handleSave}>Save</button>
        <button className='w-30 text-white bg-blue-500 mx-4 px-5' onClick={handleCancel}>Cancel</button>
      </>):(<>
      <div className=''>
        <p className='text-black text-xl'>{name}</p>
        <button className='w-30 text-white bg-blue-500 mx-4 px-5' onClick={handleEdit}>Edit</button>
        <button className='w-30 text-white bg-blue-500 mx-4 px-5' onClick={()=>handleDelete(name)}>Delete</button></div></>)}
    </div>
  )
}

export default TodoList;
