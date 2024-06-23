import React from "react";
import './pricingStyles.css'

const SingleCard = ({itemData}) => {
    const {heading , line1, line2 , line3} = itemData
  return (
    <div className="card">
      <h2> {heading} </h2>
      
        <div className="content">
            <p>{line1}</p>
            <p>{line2}</p>
            <p>{line3}</p>
        </div>

     
    </div>
  );
};

export default SingleCard;
