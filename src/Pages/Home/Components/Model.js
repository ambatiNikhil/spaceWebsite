import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Model = ({ handleClick}) => { 

  return (
    <div className='overlay'> 
     <div className='model'>
        <div className='cross'>
        <FaTimes style={{color : "white"}} size={25}  onClick={handleClick}/>
        </div>
      <h1>hey i am a model here acting as a pop up will come to help you</h1>
     </div>

    </div>
  )
}

export default Model