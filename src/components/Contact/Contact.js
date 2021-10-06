import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
const Contact = () => {
  return (
    <Container
      className=" d-flex justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <Row>
        <Col md={6} className="mb-3">
          <h3 className="fs-3 mb-3">Contact Form</h3>
          <Form className="border border-2 rounded-3 p-3 shadow">
            <Form.Control className="mb-3" placeholder="Name" />
            <Form.Control className="mb-3" placeholder="Email" />
            <Form.Control className="mb-3" placeholder="phone" />
            <Form.Control
              className="mb-3"
              as="textarea"
              placeholder="Your message"
            />
            <div className="d-grid">
              <Button variant="primary" size="lg">
                Send
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={6}>
          <h3 className="fs-3 mb-3">Contact Info</h3>
          <div className="border border-2 rounded-3 p-3 shadow">
            <p>
              If you need any kind of info about ourself please contact us at
              below address.
            </p>
            <hr style={{ height: 2 }} className="bg-secondary w-75 mx-auto" />
            <address className="font-monospace fst-italic">
              <p>22123 hanli town, Canada </p>
              <p>phone: (012) 34 567 89</p>
              <p>Email: uniedupro@gmail.com</p>
            </address>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
