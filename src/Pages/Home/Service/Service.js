import React from 'react';
import "./Service.css"


const Service = (props) => {

    const {name , img , description, price}  = props.service;
    console.log();
    
    return (
        <div className="serviceBox">
             <img className="imgSize"  src={img} alt="" />
            <h1>{name}</h1>
            <p>Desctiption  : {description}</p>
            <h3>Price  : {price}</h3>
           
            
        </div>
    );
};

export default Service;