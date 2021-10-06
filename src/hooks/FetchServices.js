import { useEffect, useState } from 'react';

const FetchServices = () => {
  const [services, setServices] = useState([]);

  // load from API
  useEffect(() => {
    fetch('./education.JSON')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services, setServices];
};

export default FetchServices;
