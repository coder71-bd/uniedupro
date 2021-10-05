import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Features = () => {
  return (
    <Card>
      <Row>
        <Col xs={4}>
          <Card.Img
            style={{ maxHeight: 100 }}
            variant="top"
            src="https://st2.depositphotos.com/3562409/5904/i/600/depositphotos_59042011-stock-photo-60-days-money-back-stamp.jpg"
          />
        </Col>
        <Col xs={8}>
          <Card.Body>
            <Card.Title>100% Moneyback Guarantee</Card.Title>
            <Card.Text>
              We believe in 100% satisfaction with our student. But if you don't
              like any of our services, we will give all your valuable money
              back according to our refund policy.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Features;
