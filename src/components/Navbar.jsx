import { Container, Nav, Navbar } from 'react-bootstrap';
import '../index.css';

function NavigationBar() {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="custom-brand">
  Dev<span className="brand-dot"></span>Builds
</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center text-lg-start">
            <Nav.Link href="#home" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
            <Nav.Link href="#experience" className="nav-link-custom">Experience</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#education" className="nav-link-custom">Education</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
