import React from 'react';
import "./Expert.css"

const Expert = (props) => {

    const {name , img , slary , age}  = props.expert;
    return (
        <div>

           
            <img className="expertImgSize" src={img} alt="" />
            <h4>{name}</h4>
            <h5>Age : {age}</h5>
            <h4>Salary : <span className="text-danger">{slary}</span> </h4>
            
        </div>
    );
};

export default Expert;