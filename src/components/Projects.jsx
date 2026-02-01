// Projects.jsx
import AOS from 'aos';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import project1 from '../assets/images/cashlypro.png';
import project2 from '../assets/images/finfeast.png';

const projects = [
  {
    title: "Expense Tracker Dashboard",
    desc: "Built a responsive expense tracker using vanilla JavaScript with full CRUD functionality. Implemented localStorage for data persistence, dynamic DOM updates, filtering, and summary calculations using modern ES6 features.",
    tech: "HTML5, CSS3, JavaScript (ES6)",
    img: project1,
    github: "#",
    demo: "https://cashlypro.netlify.app/"
  },
  {
    title: "E-Commerce Web App",
    desc: "Built a responsive e-commerce web application using React.js with API integration for fetching and displaying product data. Implemented product listing, cart management, and checkout flow to enhance user experience.",
    tech: "React.js, JavaScript (ES6), HTML5, CSS3, REST API",
    img: project2,
    github: "#",
    demo: "https://finfeast.netlify.app/"
  }

];

function Projects() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="py-5 text-light">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Featured Projects</h2>
        <Row>
          {projects.map((p, i) => (
            <Col md={6} lg={6} key={i} data-aos="zoom-in">
              <Card className="shadow-lg mb-4 project-card bg-dark border-light">
                <Card.Img variant="top" src={p.img} />
                <Card.Body>
                  <Card.Title className="text-info">{p.title}</Card.Title>
                  <Card.Text className='bs-card-bg'>{p.desc}</Card.Text>
                  <Card.Text className="bs-card-bg">
                    <strong>Technologies:</strong> {p.tech}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="outline-light" href={p.github}>
                      <FaGithub /> Code
                    </Button>
                    <Button variant="info" href={p.demo}>
                      <FaExternalLinkAlt /> Live
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
