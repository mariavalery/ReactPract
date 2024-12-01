import React,{useState,useEffect}from 'react'

function useTimer(started,minutesEntered,hoursEntered,secondsEntered) {
    const totalSeconds = Number(hoursEntered * 3600)+Number(minutesEntered*60)+Number(secondsEntered)
    console.log('totalseconds',totalSeconds);
    const[secondsLeft,setSecondsLeft]=useState(totalSeconds)
    console.log('secondsLeft',secondsLeft);

    useEffect(() => {
       if(!started) return;
       setSecondsLeft(totalSeconds)
       let intervals=setInterval(()=>{
        setSecondsLeft((prev)=>{
            if(prev===1){
                clearInterval(intervals)
                return 0;
            }
            return prev-1
        })
       },1000)
      return () => {
        clearInterval(intervals)
      }
    }, [started,totalSeconds])
    
  return (
     {secondsLeft}
  )
}

export default useTimer;