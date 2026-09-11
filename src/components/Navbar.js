import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import profileImg from "../Assets/profile.jpg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 25) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`modern-navbar ${navScrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo" onClick={() => setExpand(false)}>
          <img
            src={profileImg}
            alt="Oladoke Simeon"
            className="brand-avatar-mini"
          />
          <span>Hackerton<span className="cyan-text">.dev</span></span>
          <span className="brand-badge">Full Stack & AI</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
          style={{ border: "1px solid rgba(0, 242, 254, 0.3)", background: "rgba(255, 255, 255, 0.05)" }}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center gap-1">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => setExpand(false)}
                className={`nav-link-custom ${location.pathname === "/" ? "active" : ""}`}
              >
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpand(false)}
                className={`nav-link-custom ${location.pathname === "/about" ? "active" : ""}`}
              >
                <AiOutlineUser /> About & Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpand(false)}
                className={`nav-link-custom ${location.pathname === "/project" ? "active" : ""}`}
              >
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => setExpand(false)}
                className={`nav-link-custom ${location.pathname === "/resume" ? "active" : ""}`}
              >
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => setExpand(false)}
                className={`nav-link-custom ${location.pathname === "/contact" ? "active" : ""}`}
              >
                <AiOutlineMail /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="ms-md-2 mt-2 mt-md-0">
              <Link
                to="/contact"
                className="navbar-cta-btn"
                onClick={() => setExpand(false)}
              >
                Get In Touch
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
