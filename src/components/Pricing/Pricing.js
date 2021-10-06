import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';

const SinglePrice = () => {
  return (
    <Row>
      <Card className="text-center mb-3 mx-auto" style={{ maxWidth: 400 }}>
        <Card.Body>
          <Card.Title>Basic</Card.Title>
          <p className="fs-1">
            <sup>$</sup>
            <span>20</span>
            <sub>/month</sub>
          </p>
          <Card.Text>For individuals</Card.Text>
          <Button variant="primary">Try For Free</Button>
        </Card.Body>
      </Card>
      <Card className="text-center mb-3 mx-auto" style={{ maxWidth: 400 }}>
        <Card.Body>
          <Card.Title>Enterprise</Card.Title>
          <p className="fs-1">
            <sup>$</sup>
            <span>20</span>
            <sub>/month</sub>
          </p>
          <Card.Text>For individuals</Card.Text>
          <Button variant="primary">Try For Free</Button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default SinglePrice;
