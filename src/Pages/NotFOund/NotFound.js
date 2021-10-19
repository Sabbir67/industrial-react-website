import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from "../../images/404.jpg"

const NotFound = () => {
    return (
        <div>
            <Link to="/"><button className="bg-primary text-white rounded  my-2" style={{width: '99%'}}>Go Back</button> </Link><br />
            <img style={{width: '100%'}} src={notFoundImage} alt="" />
            
        </div>
    );
};

export default NotFound;