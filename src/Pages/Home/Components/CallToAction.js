import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import Model from './Model'

const CallToAction = () => {

    const [model , setModel] = useState(false)

    const handleClick = () => {
       setModel(!model)
       console.log("model" , model)
    }

  return (
    <>
   <section className='call-to-action'>
     <h2>Hurry up book your Tickets now</h2>
     <button onClick={handleClick}>Know More</button>
   </section>
   {model && <Model  model={model} handleClick = {handleClick}/>}
   </>
  )
}

export default CallToAction