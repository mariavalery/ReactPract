import React,{useState,useEffect} from 'react'

function Test() {
  const [message,setMessage]=useState('')
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('http://localhost:3002/Test');
        const data = await response.text(); // Use await here
        setMessage(data); // Set the fetched message
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        setMessage('Error fetching data'); 
      }
    };

    fetchMessage(); // Call the fetch function
  }, []); // Empty dependency a

  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}

export default Test;
