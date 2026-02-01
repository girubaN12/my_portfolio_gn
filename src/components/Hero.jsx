import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import heroImage from '../assets/images/hero-img.png';
import '../index.css';

function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ['Front-End Developer', 'Web Developer']; // titles to loop

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = `I am a ${titles[i]}`;
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
        setTypingSpeed(100);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, titles]);

  return (
    <section className="hero d-flex align-items-center text-light" id="home">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Left Side */}
          <Col md={6} data-aos="fade-right" className="mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">Hi, I'm Girubanithi 👋</h1>

            {/* Typing text */}
            <h2 className="animated-typing">
              {text}
              <span className="cursor"></span>
            </h2>

            <p className="lead mb-4 mt-3">
              A skilled developer with a strong portfolio, passionate about staying updated on
              frontend technologies. Collaborative and committed to quality, I thrive in dynamic teams
              and love bringing creative ideas to life.
            </p>

            <div className="hero-buttons">
              <Button variant="outline-light" href="#" target="_blank">
                Resume
              </Button>
            </div>
          </Col>

          {/* Right Side */}
          <Col md={6} className="text-center" data-aos="fade-left" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
            <div className="hero-ring">
  <div className="hero-image-wrapper">
    <img src={heroImage} alt="Girubanithi" />
  </div>
</div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Hero;
