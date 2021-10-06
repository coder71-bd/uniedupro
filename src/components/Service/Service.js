import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
  const { img, name, desc, price, year, isAvailable } = props.service;

  //change button disabled state based on API
  let buttonElem;
  if (isAvailable) {
    buttonElem = (
      <Button variant="success" size="lg">
        Enroll
      </Button>
    );
  } else {
    buttonElem = (
      <Button variant="danger" size="lg" disabled>
        closed
      </Button>
    );
  }

  return (
    <Col>
      <Card
        style={{ width: '18rem' }}
        className="position-relative mx-auto my-3 shadow-lg"
      >
        {/* service image */}
        <Card.Img style={{ height: 280 }} variant="top" src={img} alt={name} />

        {/* service price */}
        <Card.Text className="position-absolute" style={{ top: 270, left: 10 }}>
          <span className="p-3 bg-info text-white fw-bold border border-light rounded-circle">
            ${price}
          </span>
        </Card.Text>

        {/* service info */}
        <Card.Body className="mt-3">
          <Card.Title className="text-primary">{name}</Card.Title>
          <Card.Text>{year} year course</Card.Text>
          <Card.Text>{desc}</Card.Text>
          <div className="d-grid">{buttonElem}</div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
