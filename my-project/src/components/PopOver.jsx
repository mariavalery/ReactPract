import React,{useState} from 'react'

function PopOver() {
    const[showBody,setShowBody]=useState(false)
    const handleClickHere =()=>{
        setShowBody(!showBody)
    }
  return (
    <div className='flex flex-col my-3'>
      <button className='bg-blue-400 border-none rounded-md text-sm h-10 w-40' onClick={handleClickHere}>Click Here</button>
      {showBody?<>
    <div class="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-gray border-r-gray border-t-gray-500 ]"></div>

      <div className='w-1/2 bg-gray-500 '>Header</div>
      <div className='w-1/2 flex flex-grow w-1/2 bg-yellow-300 py-5 px-4 '>Add the Contents
     </div></>:null}
    </div>
  )
}

export default PopOver