import React from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Row className="align-items-center bg-primary p-3">
        <Col className="fw-bold text-uppercase text-white">
          Join our weekly newsLetter
        </Col>
        <Col>
          <InputGroup>
            <FormControl
              className="border  border-light"
              placeholder="Email Address"
              aria-label="Email Address"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-dark text-white" id="button-addon2">
              Submit
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row className="bg-dark text-white align-items-center">
        <Col>
          <p className="text-uppercase  fw-bold fs-1">uniedupro</p>
        </Col>
        <Col>
          <p>&copy; all rights reserved by UNIEDUPRO</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
