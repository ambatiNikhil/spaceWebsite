import React from 'react'
import './Header.css'

const Header = ({heading}) => {
  return (
    <section className='header'>
      <h1>{heading}</h1>

      <p>Hey this is a pricing page here come here to tell the pricing of the things</p>
     
    </section>
  )
}

export default Header