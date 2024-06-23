import React from 'react'
import video from '../../../assets/galaxyVideo.mp4'
import { Link } from 'react-router-dom'
// import '../HomeStyles.css'
const Hero = () => {
  return (
    <div className='hero'>
    <video src={video} autoPlay loop muted ></video>
    <div className='content'>
     <h1>Trave Galaxies</h1>
     <p>Come let us take you to the space of stars</p>

     <div className='buttons'>
        <Link to='/training'>Try Now</Link>
        <Link to = '/contact'>Launch</Link>
    </div>
    </div>

    
    </div>
  )
}

export default Hero