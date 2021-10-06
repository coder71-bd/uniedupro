import React from 'react';
import { Button } from 'react-bootstrap';
import overview from '../../images/overview.jpg';

const Intro = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-white vh-100"
      style={{
        background: `url(${overview})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* site intro info */}
      <div className="text-center">
        <h1 className="text-uppercase fs-1 fw-bold">uniedupro</h1>
        <p className="fs-3">world's best online learning platform</p>
        <hr style={{ height: 3 }} className="w-50 mx-auto bg-white" />
        <Button variant="outline-light" size="lg">
          Take a tour
        </Button>
      </div>
    </section>
  );
};

export default Intro;
