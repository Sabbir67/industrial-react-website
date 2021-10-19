import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"


const Service = (props) => {

    const {name , img , description, price,id}  = props.service;
    console.log();
    
    return (
        <div className="serviceBox pb-2">
             <img className="imgSize"  src={img} alt="" />
            <h3 className="text-success mt-1">{name}</h3>
            <p>Desctiption  : {description}</p>
            <h3 className="text-primary">Price  : {price}</h3>

            <Link to={`/booking/${id}`}>
            <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>

           
           
            
        </div>
    );
};

export default Service;