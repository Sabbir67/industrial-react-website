import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import "./Experts.css"

const Experts = () => {

    const [experts , setExperts] = useState([]);

    useEffect( () => {
        fetch('machanic.json')
         .then(res => res.json())
         .then(data => setExperts(data) );
    })

    return (


        <div>
            <h2 className="text-primary pt-3">Our Experts</h2>
            <div className="expert-container"  >

                {   
                
                experts.map(expert => <Expert
                
                    key = {experts.id}
                    expert = {expert}
                
                ></Expert> )
                }
                
            
        </div>
        </div>

        
    );
};

export default Experts;