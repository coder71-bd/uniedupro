import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import home from '../../images/home.png';
import SingleService from '../SingleService/SingleService';

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./education.json')
      .then((res) => res.json())
      .then((data) => setServices(data.sllice(0, 4)));
  }, []);
  return (
    <Row>
      <Col className="text-center">
        <h1>React Pro</h1>
        <p className="ps-5">an educational website for mastering React</p>
      </Col>
      <Col className="container mx-auto">
        <img src={home} alt="learing react" />
      </Col>
      {services.map((service) => (
        <SingleService key={service.id} service={service} />
      ))}
    </Row>
  );
};

export default Home;
