import React,{useState,useEffect} from 'react'
import {useTheme} from '../components/ThemeContext';

function WeatherApp() {
  const{theme,toggleTheme}=useTheme()
  const[datafetched,setdataFetched]=useState(false)
  const[response,setResponse]=useState(null)
  const getWeatherData=(latitude,longitude)=>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ddfe526ee21d4cafe61fdab6b1bb7284`)
  .then((response)=>response.json())
  .then((result)=>{
    console.log("result",result)
    setResponse(result)
    setdataFetched(true)
  })
  }
  const showLocation=(pos)=>{
         console.log(pos)
         getWeatherData(pos.coords.latitude,pos.coords.longitude)
  }
 useEffect(() => {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showLocation)
   };
 }, []);
  return (
    <div style={{backgroundColor:theme==='dark'?"black":"white",
      width:'100vw',
      height:'100vh',
    }} >
      <div className=' md:w-1/4 text-center my-3'>
        <button className='w-40 h-10 rounded-2xl border border-blue bg-blue-400 text-white text-center' onClick={toggleTheme}>Switch Mode</button>
        </div>  
        <h1 className='md:w-1/4 text-blue-900 text-center text-3xl'>WeatherApp</h1>
        <div>
          <p className='md:w-1/4 px-3 text-red-400' style={{color:theme==='dark'?'white':'black'}}>A weather application that fetches and displays real-time weather information based on the user’s location or input. This project will help you practice API integration, state management, and handling asynchronous data in React.</p>
          
          {datafetched && response ?(<>
          <div className='text-blue-800 p-2'>{response.name}</div>
          <div className='text-blue-800 p-2'>Current Temperature: <span className='text-red-500'>{`${(response.main.temp-273.15).toFixed(2)}°C`}</span></div>
          <div className='text-blue-800  p-2'>{`Description: ${response.weather[0].description}`}</div>
          <div className='text-blue-800  p-2' >{`Max Temperature: ${response.main.temp_max} F`}</div> 
          <div className='text-blue-800  p-2'>{`Min Temperature: ${response.main.temp_min} F`}</div> 
          <div className='text-blue-800  p-2' >{`Humidity: ${response.main.humidity} F`}</div> 
          </>): <div>Loading</div>}
          
        </div>
    </div>
  )
}

export default WeatherApp
