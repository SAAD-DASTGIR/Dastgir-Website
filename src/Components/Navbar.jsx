import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <h4 className="nav-icon">
        <FontAwesomeIcon icon={["fas", "chess-king"]} /> Saad Dastgir
      </h4>
      <button className="nav-icon hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={["fas", "bars"]} />
      </button>
      <ul className={`nav-list ${showMenu ? "show" : ""}`}>
        <li className="nav-item">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={toggleMenu}
          >
            Home
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            to="about-me"
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={toggleMenu}
          >
            About
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            to="skill"
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={toggleMenu}
          >
            Skills
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={toggleMenu}
          >
            Services
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={toggleMenu}
          >
            Experience
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            to="resume"
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={toggleMenu}
          >
            Resume
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={toggleMenu}
          >
            Projects
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={toggleMenu}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
      <motion.button
        animate={{ opacity: 1, scale: [0.5, 1], rotate: [0, 360], x: [0, 20, 0] }}
        whileHover={{ scale: 1.1, color: "#0f0e0e", backgroundColor: "#64f4ab" }}
        whileTap={{ scale: 1.2 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="btn-contact"
        onClick={()=>window.location.href="mailto:msaaddastgir@gmail.com"}
      >
        <FontAwesomeIcon icon={["fas", "user"]} /> Say Hi
      </motion.button>
    </div>
  );
};

export default Navbar;
