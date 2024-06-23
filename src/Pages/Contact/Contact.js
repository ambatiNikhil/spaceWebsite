import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Form from './Component/Form'

const Contact = () => {
  return (
    <>
    <NavBar /> 
    <Header heading = "Contact Page"/>
    <Form />
    <Footer />
    </>
  )
}

export default Contact