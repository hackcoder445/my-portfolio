import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Github from "./Github";
import { experience, personalInfo } from "../../data/portfolioData";
import profileImg from "../../Assets/profile.jpg";
import gsap from "gsap";
import { FaMapMarkerAlt } from "react-icons/fa";

function About() {
  const photoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(photoRef.current, {
        opacity: 0,
        x: -30,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to(photoRef.current, {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh", paddingTop: "6.5rem" }}>
      <Particle />
      <Container className="py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="status-pill mb-2">
            <span>Background & Architecture</span>
          </div>
          <h1 style={{ fontSize: "2.8rem", fontWeight: 800 }}>
            About <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <p style={{ color: "var(--text-muted)", maxWidth: "620px", margin: "0.5rem auto 0" }}>
            Software engineer dedicated to full-stack craftsmanship, scalable system design, and AI automation.
          </p>
        </div>

        {/* About Bio Section with User Picture */}
        <Row className="gy-4 mb-5 align-items-center">
          <Col lg={4} className="d-flex justify-content-center">
            <div className="hero-profile-container" ref={photoRef} style={{ width: "100%", maxWidth: "320px" }}>
              <div
                className="hero-profile-frame"
                style={{ borderRadius: "24px", padding: "5px" }}
              >
                <div className="hero-profile-inner" style={{ borderRadius: "20px" }}>
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    style={{ width: "100%", height: "380px", objectFit: "cover", objectPosition: "top center" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "0.85rem",
                      background: "linear-gradient(to top, rgba(5, 7, 20, 0.95), transparent)",
                      textAlign: "center",
                    }}
                  >
                    <div className="fw-bold" style={{ color: "#ffffff", fontSize: "0.95rem" }}>
                      {personalInfo.name}
                    </div>
                    <div className="cyan-text" style={{ fontSize: "0.75rem" }}>
                      <FaMapMarkerAlt className="me-1" /> {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <AboutCard />
          </Col>
        </Row>

        {/* Experience / Milestones Timeline */}
        <div className="py-4 mb-5">
          <div className="text-center mb-4">
            <div className="status-pill mb-2">
              <span>Track Record</span>
            </div>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 800 }}>
              Career & <span className="gradient-text">Milestones</span>
            </h2>
            <p style={{ color: "var(--text-muted)" }}>
              A proven track record of shipping software and solving technical challenges.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg={9}>
              <div className="timeline-container">
                {experience.map((item, idx) => (
                  <div className="timeline-item" key={idx}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-period">{item.period}</div>
                    <div className="timeline-role">{item.role}</div>
                    <div className="timeline-company">{item.company}</div>
                    <div className="timeline-desc">{item.description}</div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        {/* Interactive Skills Matrix */}
        <div className="py-4 mb-5">
          <div className="text-center mb-2">
            <div className="status-pill mb-2">
              <span>Technical Repertoire</span>
            </div>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 800 }}>
              Interactive <span className="gradient-text">Skill Matrix</span>
            </h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0.5rem auto 0" }}>
              Filter by engineering domain to explore proficiency across frontend, backend, AI, data, and devops.
            </p>
          </div>

          <Techstack />
        </div>

        {/* GitHub Contributions */}
        <Github />
      </Container>
    </div>
  );
}

export default About;
