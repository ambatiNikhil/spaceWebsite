import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Hero from './Components/Hero'
import './HomeStyles.css'
import About from './Components/About'
import Services from './Components/Services'
import CallToAction from './Components/CallToAction'
// import Faq from './Components/Faq'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About  heading="About Us"/>
      <Services />
      <CallToAction /> 
      {/* <Faq /> */}
      <Footer />
    </div>
  )
}

export default Home