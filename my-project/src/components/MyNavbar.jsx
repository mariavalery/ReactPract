import React, { useState, useEffect } from "react";
 
const MyNavbar = () => {

const [clickedItemId,setClickedItemId]=useState(0)
const[isMobile,setIsMobile]=useState(window.innerWidth<460)
const[sandwichClicked,setSandwichClicked]=useState(false)

const updateIsMobile=()=>{
    setIsMobile(window.innerWidth<460)
}
useEffect(() => {
    window.addEventListener("resize",updateIsMobile)
  return () => {
    window.removeEventListener("resize",updateIsMobile)
  };
}, []);
console.log("isMobile",isMobile)


const data=[{id:"01",title:"WeatherApp"},
    {id:"02",title:"Todo"},
    {id:"03",title:"Test"},
    {id:"04",title:"star-rating"},
    {id:"05",title:"Progressbar"},
    {id:"06",title:"Pagination"}
]
const handleClick=(clickedId)=>{
   
    setClickedItemId(clickedId)
}
const handleSanwichClick=(e)=>{
  e.stopPropagation()
  setSandwichClicked(!sandwichClicked)
  
}
const handleOptionClick=(e,clickedId)=>{
  e.stopPropagation()
  setClickedItemId(clickedId)
  setSandwichClicked(false)
}
const getSanwichOption=()=>{
  let array=[]
  data.map((item)=>{
    array.push(<div key={item.id}
      id={item.id}
      className={`${item.id===clickedItemId?'bg-gray-300':'bg-white'} border border-gray-400 p-2 hover:bg-gray-200 relative ` }
      onClick={(e)=>handleOptionClick(e,item.id)}
>
<a href={`/${item.title}`}> {item.title}   </a>
      </div>)
  });
  return array



}
  return (
    <div className="w-full bg-blue-500 p-2 h-16">
        <nav className="flex" >
            {isMobile ?(<div className="cursor-pointer" onClick={(e)=>handleSanwichClick(e)}>
                <div className=" w-10 h-2 border-b-4 border-white p-1"></div>
                <div className=" w-10 h-2 border-b-4 border-white p-1"></div>
                <div className=" w-10 h-2 border-b-4 border-white p-1"></div>
                <div className="flex flex-col m-2">
                  {sandwichClicked && getSanwichOption()}
                </div>
            </div>):(data.map((item) =>(
              <div id={item.id}
              key={item.id}
              onClick={(e)=>handleClick(item.id)}
              className={` p-2 mx-5 cursor-pointer text-white ${clickedItemId===item.id ?"border-b-2 border-white":""}`}
              >
              <a href={`/${item.title}`}> {item.title}   </a>
              </div>
            )))}
            
        </nav>
    </div>
  )
}

export default MyNavbar
