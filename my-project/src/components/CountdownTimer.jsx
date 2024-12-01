import React,{useState,useEffect} from 'react'
import useTimer from '../hooks/useTimer'
function CountdownTimer() {
    const[started,setStarted]=useState(false)
    const[hoursEntered,setHoursEntered]=useState(0)
    const[minutesEntered,setMinutesEntered]=useState(0)
    const[secondsEntered,setSecondsEntered]=useState(0)

const {secondsLeft}=useTimer(
    started,minutesEntered,hoursEntered,secondsEntered
)
console.log('secondsLeft',secondsLeft);
const handleInputChange=(e,type)=>{
    let valueEntered=Number(e.target.value)
    if(isNaN(valueEntered)){
        setSecondsEntered(0)
    }
    else if(type==='hours' && (!isNaN(valueEntered))){
         setHoursEntered(e.target.value)
    }
    else if(type==='minutes' && (!isNaN(valueEntered))){
        setMinutesEntered(e.target.value)
   }
   else if(type==='seconds' && (!isNaN(valueEntered))){
    setSecondsEntered(e.target.value)
}

}

const handleStart=()=>{
    setStarted(true)
}
const handleReset=()=>{
    setHoursEntered(0)
    setMinutesEntered(0)
    setSecondsEntered(0)
    setStarted(false)
}
  return (
    <div>
        {started?<>
        <div> Hours Left :{Math.floor(secondsLeft/3600)}</div>
        <div> Minutes Left :{Math.floor((secondsLeft%3600)/60)}</div>
        <div> Seconds Left :{(secondsLeft%60)}</div>
        <button className='bg-green-500 w-40 h-10 rounded-lg m-3' onClick={()=>handleReset()}>Reset</button>
        </>:<>
        <div>
            <label  >Hours</label>
            <input className='block w-30 border border-black p-1 rounded-md' type='text' value={hoursEntered} onChange={(e)=>handleInputChange(e,"hours")}/>
        </div>
        <div>
            <label >Minutes</label>
            <input className='block w-30 border border-black  p-1 rounded-md' type='text' value={minutesEntered} onChange={(e)=>handleInputChange(e,'minutes')}/>
        </div>
        <div>
            <label >Seconds</label>
            <input className='block w-30 border border-black  p-1 rounded-md' type='text' value={secondsEntered} onChange={(e)=>handleInputChange(e,'seconds')}/>
        </div>
        <button className='bg-green-500 w-40 h-10 rounded-lg m-3' onClick={handleStart}>Start</button>
        </>}
    </div>
  )
}

export default CountdownTimer