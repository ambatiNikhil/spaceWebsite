import React from 'react'
import SingleCard from './SingleCard'
import './pricingStyles.css'

const Card = () => {
    const data = [
        {
            id : 1,
            heading : "Basic",
            line1 : "5 Lakhs",
            line2 : "No Unlimited Access",
            line3 : "No food"
        },
        {
            id : 2,
            heading : "Medium",
            line1 : "10 Lakhs",
            line2 : "Unlimited Access",
            line3 : "No food"
        },
        {
            id : 3,
            heading : "Advanced",
            line1 : "15 Lakhs",
            line2 : "Unlimited Access",
            line3 : "food"
        }
    ]
  return (
    <>
        <h1>Pricing Details</h1>

        <section className='cards'>
         {
            data.map((item) => {
                return(
                    <SingleCard  itemData={item}/>
                )
            })
         }
        </section>
    </>
  )
}

export default Card