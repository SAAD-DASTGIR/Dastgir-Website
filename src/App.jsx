import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Introduction from './Components/Introduction.jsx';
import AboutMe from './Components/AboutMe.jsx';
import Experience from './Components/Experience.jsx';
import Services from './Components/Services.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Resume from './Components/Resume.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './Components/Contact.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      > */}
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      {/* </motion.div> */}
      <AboutMe />
      <Experience/>
      <Services />
      <Skills/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer />
    </Router>
  );
}

export default App;
