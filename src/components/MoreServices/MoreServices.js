import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FetchServices from '../../hooks/FetchServices';
import Service from '../Service/Service';
const MoreServices = () => {
  //use custom hooks
  const [services] = FetchServices();
  return (
    <Container>
      <Row className="justify-content-center">
        {services.map((service) => (
          <Service key={service.key} service={service} />
        ))}
      </Row>
    </Container>
  );
};

export default MoreServices;
