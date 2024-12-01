import React,{useEffect,useState} from 'react'
import PopOver from '../components/PopOver';
import Pagination from '../components/Pagination';
import CountdownTimer from '../components/CountdownTimer';
function ProgressBar() {
  const[progress,setProgress]=useState(0)

  useEffect(() => {
      
    const intervals= setInterval(()=>{
        setProgress((prev)=>{
            if(prev>=100){
                clearInterval(intervals)
                return 100
            }
            return prev+1
        })
    },1000)
  
    return () => {
      clearInterval(intervals)
    }
  }, [])
  
  return (
    <div className='text-left text-xl text-red-800 m-3'>ProgressBar
    <Bar text={progress} width={progress}/>
    <PopOver/>
    <CountdownTimer/>
    </div>
  )
}

export default ProgressBar;


export function Bar({text,width}){
    return(
          <div className='w-1/2 md:w-1/4 bg-gray-500 w-100 '>
             <div className='bg-green-500' style={{width:`${width}%`}}>{text}</div>
          </div>
    );
}