import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Features = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./education.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {services.map((service) => (
        <SingleService key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Features;
