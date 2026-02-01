// Education.jsx
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const educations = [
    {
      degree: "Front End Development Mastery along with react-js",
      institute: "Besant Technologies",
      year: "2025",
      details:
        "With a comprehensive front-end development course under my belt, I've cultivated expertise in HTML, CSS, and JavaScript. This educational journey has empowered me to craft visually captivating, responsive websites and dynamic web applications. Complementing this, I've refined my abilities through hands-on projects using React.js, a powerful tool for contemporary web development. These experiences have enriched my understanding of front-end development, igniting my passion to design user-centric and captivating digital solutions.",
    },
    {
      degree: "Bachelor of Engineering (Mechanical)",
      institute: "Dhanalakshmi srinivasan Engg college, perambalur",
      year: "2012 - 2016",
      details:
        "As a mechanical engineering graduate, I possess strong problem-solving and precision skills. Combining this foundation with my passion for technology, I'm venturing into IT. My college experience has equipped me to bridge the worlds of engineering and IT, applying efficiency and innovation to both realms, making me a versatile professional.",
    },
    {
      degree: "Higher Secondary (Science)",
      institute: "Tagore Matric Higher Secondary School",
      year: "2011 - 2012",
      details: "Completed higher secondary with focus on Physics, Chemistry and Mathematics. My studies have fostered critical thinking and a thirst for knowledge. Through my dedication and adaptability, I've honed essential skills that transcend disciplines, preparing me for future challenges and opportunities.",
    },
        {
      degree: "SSLC",
      institute: "Sri Saraswathi Vidhyalaya Matric HSS",
      year: "2009 - 2010",
      details:
        "I embarked on my educational journey with enthusiasm. This pivotal year instilled a strong foundation in essential subjects and time management. It was a crucial step toward my academic and personal development, preparing me for the road ahead",
    },
  ];

  return (
    <section id="education" className="py-5">
      <Container>
        <h2 className="text-center mb-3 fw-bold">Education</h2>
        <h5 className="text-center mb-5">
          Academic background and certifications
        </h5>

        <Row className="g-4">
          {educations.map((edu, idx) => (
            <Col key={idx} md={6} lg={6} data-aos="zoom-in">
              <Card className="h-100 shadow-sm border-0 rounded-4">
                <Card.Body>
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="p-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ background: "#eef2ff", width: 54, height: 54 }}
                    >
                      <FaGraduationCap size={22} color="#4f46e5" />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">{edu.institute} </h5>
                      <small className="text-muted d-block">
                        {edu.degree} • {edu.year}
                      </small>
                    </div>
                  </div>

                  <p className="mt-3 mb-0">{edu.details}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Education;
