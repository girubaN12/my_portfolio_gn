// Contact.jsx
import { Button, Container, Form } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section text-light py-5">
      <Container className="text-center">
        <h2>Get In Touch</h2>
        <p className="mb-4">Let's connect and build something amazing!</p>

        <div className="mb-3">
          <a href="mailto:girubadev@gmail.com" className="text-light mx-3 fs-3">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/giruba-n/" target="_blank" rel="noopener noreferrer" className="text-light mx-3 fs-3">
            <FaLinkedin />
          </a>
          <a href="https://github.com/girubaN12" target="_blank" rel="noopener noreferrer" className="text-light mx-3 fs-3">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/girubagn/" target="_blank" rel="noopener noreferrer" className="text-light mx-3 fs-3">
            <FaInstagram />
          </a>
          <a href="https://wa.me/918072731129" target="_blank" rel="noopener noreferrer" className="text-light mx-3 fs-3">
            <FaWhatsapp />
          </a>
        </div>

        <Form className="mx-auto" style={{ maxWidth: '500px' }}>
          <Form.Control type="text" placeholder="Your Name" className="mb-3" />
          <Form.Control type="email" placeholder="Your Email" className="mb-3" />
          <Form.Control as="textarea" rows={4} placeholder="Message" className="mb-3" />
          <Button variant="light" type="submit">Send Message</Button>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
