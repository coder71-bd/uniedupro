import React from 'react';
import { Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <section className="text-center my-3">
      <p style={{ fontSize: 100 }} className="text-danger">
        404
      </p>
      <p className="fs-4 text-info">Sorry! we couldn't find this page</p>
      <p>Please go back to home page</p>
      <Button variant="info text-white">Home</Button>
    </section>
  );
};

export default NotFound;
