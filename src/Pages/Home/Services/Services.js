import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"


const Services = () => {
    
    const [service , setService] = useState([]);

    useEffect( () => {
        fetch('services.json')
         .then(res => res.json())
         .then(data => setService(data) );
    })


    return (


        <div id="services">
            <h2 className="text-primary pt-3">Our Services</h2>
            <div className="service-container">
                        
                        {
                            service.map(services => <Service
                                key = {service.id}
                                service = {services}
                            ></Service>)
                        }
                
                    </div>

        </div>
        
    );
};

export default Services;