// Skills.jsx
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  FaBootstrap,
  FaChrome,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { SiNetlify, SiRedux, SiVite } from "react-icons/si";
import { VscCode } from "react-icons/vsc"; // ✅ Correct VS Code icon

function Skills() {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 color="#e34c26" size={40} /> },
    { name: "CSS", icon: <FaCss3Alt color="#264de4" size={40} /> },
    { name: "JavaScript", icon: <FaJsSquare color="#f7df1e" size={40} /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#563d7c" size={40} /> },
    { name: "React.js", icon: <FaReact color="#61dbfb" size={40} /> },
    { name: "Redux", icon: <SiRedux color="#764abc" size={40} /> },
  ];

  const otherSkills = [
    { name: "Git", icon: <FaGitAlt color="#f34f29" size={40} /> },
    { name: "GitHub", icon: <FaGithub color="#333" size={40} /> },
    { name: "Netlify", icon: <SiNetlify color="#00c7b7" size={40} /> },
    { name: "VS Code", icon: <VscCode color="#007acc" size={40} /> },
    { name: "Vite", icon: <SiVite color="#646cff" size={40} /> },
    { name: "Chrome DevTools", icon: <FaChrome color="#f4b400" size={40} /> },
  ];

  const renderSkillBox = (title, skills) => (
    <Card className="shadow-sm p-3 mb-4 border-0 rounded-4">
      <Card.Body>
        <h4 className="text-center mb-4 fw-bold">{title}</h4>
        <Row className="g-4 text-center justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2}>
              <div className="d-flex flex-column align-items-center">
                {skill.icon}
                <p className="mt-2 fw-semibold">{skill.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-3 fw-bold">My Skills</h2>
        <h5 className="text-center mb-5">
          Here are some of my skills on which I have learned.
        </h5>

        {renderSkillBox("Frontend Skills", frontendSkills)}
        {renderSkillBox("Other Tools & Technologies", otherSkills)}
      </Container>
    </section>
  );
}

export default Skills;
