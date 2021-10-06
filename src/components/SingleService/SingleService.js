import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const SingleService = (props) => {
  const { name, img, desc } = props.service;
  return (
    <div>
      <Card>
        <Row>
          <Col xs={4}>
            <Card.Img variant="top" style={{ maxHeight: 200 }} src={img} />
          </Col>
          <Col xs={8}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{desc}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SingleService;
