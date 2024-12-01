import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'
function StarRating() {
  const [hoveredStars, setHoveredStars] = useState([])
  const [clickedStars, setClickedStars] = useState([])

  const handlehoverStar = (i) => {
    setHoveredStars((prev) => [...prev, i]);
  }
  const handleCilckedStar = () => {
    setClickedStars(hoveredStars)
  }
  const handleHoverLeave = () => {
    setHoveredStars([])
  }
  const renderedstars = () => {
    let array = []
    for (let i = 0; i < 5; i++) {
      array.push(
        <div
          key={i}
          className={`${hoveredStars.includes(i) ? 'bg-yellow-300' : 'bg-gray-300'} p-2 cursor-pointer rounded-lg`}
          onMouseEnter={() => handlehoverStar(i)}
          onClick={() => handleCilckedStar(i)}>
          <FaStar color={hoveredStars.includes(i) || clickedStars.includes(i) ? 'yellow' : 'gray'}
            size={40} />
        </div>
      )
    }
    return array;
  };
  return (
    <>


      <div className='flex flex-col min-h-screen'>
        <header className='text-center bg-gray-800 text-white py-4'>Header</header>
        <div className='flex flex-1 '>
          <div className='w-1/4 bg-blue-300 text-white p-4'>
            <aside className='text-center'>Aside</aside>
          </div>
          <div className='w-3/4 flex flex-col m-3 '>
            <div className='flex flex-1 justify-center bg-yellow-200 items-center p-4  mb-3'>
              <div className='text-center  text-gray-500'>Content 1</div>
            </div>
            <div className='flex gap-4 mb-3'>
              <div className='flex-1 bg-red-300 text-gray-500 p-4 text-center'>Content 2</div>
              <div className='flex-1 bg-violet-300 text-gray-500 p-4 text-center'>Content 3</div>
            </div>
          </div>
        </div>
        <div>
          <footer className='text-center bg-gray-800 text-white'>Footer</footer>
        </div>
      </div>

      <div className='flex py-3 justify-center items-start'>
        <div className='flex gap-2'
          onMouseLeave={() => handleHoverLeave()}>
          {renderedstars()}
        </div>
      </div>
    </>
  )
}

export default StarRating;