import React from 'react';
import "./Expert.css"

const Expert = (props) => {

    const {name , img , slary , age}  = props.expert;
    return (
        <div>

           
            <img className="expertImgSize" src={img} alt="" />
            <h2>{name}</h2>
            <h4>Age : {age}</h4>
            <h4>Salary : {slary}</h4>
            
        </div>
    );
};

export default Expert;