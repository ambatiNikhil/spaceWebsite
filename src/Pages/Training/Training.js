import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import About from '../Home/Components/About'

const Training = () => {
  return (
    <>
    <NavBar /> 
    <Header heading = "Training Page"/>
    <About heading="Training page"/>
    <Footer />
    </>
  )
}

export default Training