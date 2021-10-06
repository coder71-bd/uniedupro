import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
const MoreServices = () => {
  const Services = [
    {
      key: '4853545077',
      img: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      name: 'BSc Computer Science',
      price: 1200,
      year: 4,
      desc: 'Master in-demand computing skills and sharp your innovation and creativity with this course.',
      isAvailable: true,
    },
    {
      key: '3807296670',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      name: 'Analysis of Algorithms',
      price: 1000,
      year: 3,
      desc: 'This course teaches a calculus that enables precise quantitative predictions of large combinatorial structures.',
      isAvailable: false,
    },
    {
      key: '1290847444',
      img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'AI For Everyone',
      price: 2400,
      year: 4,
      desc: 'AI is not only for engineers. If you want your organization to become better at using AI, this is the course to tell everyone--especially your non-technical colleagues--to take. ',
      isAvailable: true,
    },
    {
      key: '9445869389',
      img: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFwcGluZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'The science of well being',
      price: 240,
      year: 2,
      desc: 'In this course you will engage in a series of challenges designed to increase your own happiness and build more productive habits.',
      isAvailable: true,
    },
    {
      key: '5834188974',
      img: 'https://images.unsplash.com/photo-1612232134966-a9b076b9fbe7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHN5Y2hvbG9naXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Introduction to Psychology',
      price: 500,
      year: 3,
      desc: 'This course tries to answer many psychological questions and many others, providing a comprehensive overview of the scientific study of thought and behavior.',
      isAvailable: false,
    },
    {
      key: '7180900435',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZXhjZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Excel Skills for Business',
      price: 1200,
      year: 2,
      desc: 'This course is intended for anyone who seeks to develop one of the most critical and fundamental digital skills today.',
      isAvailable: true,
    },
    {
      key: '0938980793',
      img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Foundations of Project Management',
      price: 800,
      year: 3,
      desc: 'This course is the first in a series of six to equip you with the skills you need to apply to introductory-level roles in project management.',
      isAvailable: false,
    },
    {
      key: '9367514638',
      img: 'https://media.istockphoto.com/photos/closeup-of-unrecognizable-designer-sitting-at-desk-with-papers-and-picture-id1192947841?b=1&k=20&m=1192947841&s=170667a&w=0&h=0ZGbZQRv4xmh5goNIyzWtIoeQGxOHAxLc-8r76WRPFE=',
      name: 'UX Design Professional Certificate',
      price: 240,
      year: 4,
      desc: 'Prepare for a career in the high-growth field of UX design, no experience or degree required',
      isAvailable: true,
    },
  ];
  return (
    <Container>
      <Row className="justify-content-center">
        {Services.map((service) => (
          <Service key={service.key} service={service} />
        ))}
      </Row>
    </Container>
  );
};

export default MoreServices;
