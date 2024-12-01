import React, { useEffect, useState } from 'react'

function Navbar() {
    const [clickedItemId, setClickedItemId] = useState(0)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 460)
    const[sandwichClicked,setSandwichClicked]=useState(false)

    const handleClick = (clickedid) => {
        setClickedItemId(clickedid)
    }
    const updateIsMobile = () => {
        setIsMobile(window.innerWidth < 460)
    }
    const handleSanwichClick=(e)=>{
       e.stopPropagation()
       setSandwichClicked(!sandwichClicked)

    }
    const handleOptionsClick =(e,clickedId)=>{
    setClickedItemId(clickedId)
    setSandwichClicked(false)
    }
    const getOptionsContainer=()=>{
        let array=[]
        data.map((item)=>{
            array.push(
            <div id={item.id}
            key={item.id}
            onClick={(e)=>handleOptionsClick(e,item.id)}
            className= {`${item.id===clickedItemId?'bg-gray-500':'bg-white'} border border-gray-500 p-2`}   >
            {item.title}
            </div>)
        })
        return array;
    }
    useEffect(() => {
        window.addEventListener('resize', updateIsMobile)
        return () => {
            window.removeEventListener('resize', updateIsMobile)
        };
    }, []);
    console.log(isMobile)

    const data = [{ id: "01", title: "Home" },
    { id: "02", title: "About Us" },
    { id: "03", title: "Support" },
    { id: "04", title: "History" }
    ]
    return (
        <div className='w-full h-16 bg-red-500 p-2 '>
            <nav className='flex'>
                {isMobile ? (<div className='cursor-pointer' onClick={(e)=>handleSanwichClick(e)}>
                    <div className='w-10 h-2 border-b-4 p-1  border-black'></div>
                    <div className='w-10 h-2 border-b-4 p-1 border-black'></div>
                    <div className='w-10 h-2 border-b-4 p-1 border-black'></div>
                    <div className='flex flex-col m-2'>
                    {sandwichClicked && getOptionsContainer()}
                    </div>
                </div>) : (data.map((item) => (
                    <div key={item.id}
                        id={item.id}
                        onClick={(e) => handleClick(item.id)}
                        className={`text-black cursor-pointer p-2 mx-5 ${clickedItemId === item.id?"border-b-2 border-black":""}`}>
                        {item.title}
                    </div>
                )))}
            </nav>
        </div>
    )
}

export default Navbar

