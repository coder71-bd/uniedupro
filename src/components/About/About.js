import React from 'react';
import about from '../../images/about.png';

const About = () => {
  return (
    <article>
      <img src={about} alt="about" />
      <p>
        React pro is an educational institute to master react. We offer project
        based learning. Our students are working all around the world. We train
        many newbie web developer and make them a professional in React. We also
        offer training for enterprise employee to maximize their skills in
        react. Be with us, we will walk you through a journey which makes you a
        master of react.
      </p>
    </article>
  );
};

export default About;
