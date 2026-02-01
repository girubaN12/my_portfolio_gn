// Experience.jsx
import { Card, Col, Container, Row } from "react-bootstrap";

function Experience() {
  const experiences = [
    {
      company: "Newgen Knowledge Works Pvt Ltd",
      role: "Executive",
      duration: "May 2022 - Present",
       description:
        "Developed and maintained multiple online education websites (e.g., Pearson, Avallin) as part of the Digital Team. Worked on HTML/CSS coding, publishing content, and integrating designs into client tools while ensuring responsive and accessible web pages. Collaborated closely with team members and the Quality team to resolve daily asset and content-related issues, ensuring smooth project delivery and high-quality standards.",
    },
    {
      company: "Prego PG Equipments India Pvt Ltd",
      role: "Service Engineer ",
      duration: "Aug 2018 - Jan 2022",
      description:
        "Performed installation, maintenance, and troubleshooting of electrical kitchen equipment. Handled service queries efficiently and ensured quick issue resolution. Maintained detailed service records, invoices, and client updates using Excel sheets. Collaborated with the team to deliver reliable after-sales support and enhance customer satisfaction.",
    },
    {
      company: "Faurecia India Private Limited",
      role: "Traniee",
      duration: "Jun 2017 - Jun 2018",
      description:
        "Gained hands-on experience in automotive manufacturing processes and mechanical assembly operations. Assisted in production line activities, equipment handling, and quality checks for car component manufacturing. Supported senior engineers in troubleshooting mechanical issues and maintaining process efficiency while ensuring adherence to safety and quality standards.",
    },
  ];

  return (
    <section id="experience" className="py-5">
      <Container>
        <h2 className="text-center mb-3 fw-bold">Work Experience</h2>
        <h5 className="text-center mb-5">
          My professional journey and contributions across different companies.
        </h5>

        <Row className="g-4">
          {experiences.map((exp, index) => (
            <Col key={index} md={12} lg={12}>
              <Card className="shadow-sm p-3 border-0 rounded-4 h-100">
                <Card.Body>
                  <h4 className="fw-bold text-primary">{exp.company}</h4>
                  <h6 className="fw-semibold">{exp.role}</h6>
                  <p className="text-muted mb-2">{exp.duration}</p>
                  <p>{exp.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
