import React, { useState } from 'react'
import './left.css'
const Left = () => {
    const [imageNumber,setImageNumber]=useState(0);
    const imageArray=["https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80","https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"];

  return (
    <div className='mobileView'>
        <div className='carouselContainer'>
            <img src={imageArray[imageNumber]}/>
        </div>
        <div className='buttons'>
          <div className='button' onClick={()=>setImageNumber(0)} style={{backgroundColor:imageNumber===0?"green":"grey"}}></div>
          <div className='button' onClick={()=>setImageNumber(1)} style={{backgroundColor:imageNumber===1?"green":"grey"}}></div>
          <div className='button' onClick={()=>setImageNumber(2)} style={{backgroundColor:imageNumber===2?"green":"grey"}}></div>
        </div>

        <div className='staticButton'></div>
      </div>
  )
}

export default Left;