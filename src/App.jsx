import 'animate.css';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Swal from 'sweetalert2';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavigationBar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './index.css';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    Swal.fire({
      title: '<span style="font-size: 28px; font-weight: 700; color: #fff;">Welcome to My Portfolio 👋</span>',
      html: `
        <div style="
          font-size: 16px; 
          color: #fff; 
          margin-top: 10px;
          line-height: 1.5;
          background: linear-gradient(135deg, #020617, #0f172a);
        ">
          <p>Hi, I’m <strong>Girubanithi</strong> — a <b>Front-End Developer</b> passionate about building beautiful, responsive web applications.</p>
          <p>Click below to explore my skills, experience, and projects!</p>
        </div>
      `,
      confirmButtonText: '🚀 Explore Now',
      confirmButtonColor: '#0d6efd',
      background: 'linear-gradient(135deg, #020617, #0f172a)',
      color: '#fff',
      width: '50%',
      padding: '30px 20px',
      backdrop: 'rgba(0, 0, 0, 0.8)',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'rounded-4 shadow-lg',
        confirmButton: 'swal2-confirm-custom'
      },
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        setShowPortfolio(true);
      }
    });
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {showPortfolio && (
                <>
                  <Hero />
                  <Skills />
                  <Experience />
                  <Projects />
                  <Education />
                  <Contact />
                </>
              )}
            </>
          }
        />
      </Routes>
      {showPortfolio && <Footer />}
    </Router>
  );
}

export default App;
