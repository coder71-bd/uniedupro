import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FetchServices from '../../hooks/FetchServices';
import Service from '../Service/Service';

const Services = () => {
  //use custom hooks
  const [services] = FetchServices();

  return (
    <Container>
      <h2 className="fs-2 text-center fw-bold mt-3">Our Services</h2>

      {/* show four services */}
      <Row className="justify-content-center">
        {services.slice(0, 4).map((service) => (
          <Service key={service.key} service={service} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
