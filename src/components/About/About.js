import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import university from '../../images/university.jpg';

const About = () => {
  return (
    <Container
      className=" d-flex justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <Row className="justify-content-center align-items-center">
        {/* about info */}
        <Col lg={6}>
          <h3 className="pe-2 text-warning mb-3">About UNIEDUPRO</h3>
          <p className="font-monospace">
            UNIEDUPRO is an international online university. We provide many
            services to build a students skill in a certain field. Our intention
            is to make a better world by providing skillfull and ethically
            improved human. We also provide scholarship to many students. Our
            students are working all around the world after completing their
            graduation from here. We provide world class instructors, they will
            help you in all your problems. We got many award for our
            extraordinary activities. We also give importance to research. So,
            don't hesitate to enroll in our university, We swear you will not
            regret it.
          </p>
        </Col>

        {/* about image */}
        <Col lg={6} style={{ maxWidth: 500 }}>
          <img
            className="img-fluid mx-auto"
            src={university}
            alt="university"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default About;
