import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { personalInfo } from "../../data/portfolioData";
import profileImg from "../../Assets/profile.jpg";
import gsap from "gsap";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
  AiOutlineDownload,
} from "react-icons/ai";
import { FaWhatsapp, FaCheckCircle, FaLaptopCode } from "react-icons/fa";

function Home() {
  const heroTextRef = useRef(null);
  const profileCardRef = useRef(null);
  const badgeTopRef = useRef(null);
  const badgeBottomRef = useRef(null);

  useEffect(() => {
    // GSAP Entrance Animations
    const ctx = gsap.context(() => {
      // Text stagger reveal
      gsap.from(".gsap-hero-item", {
        opacity: 0,
        y: 35,
        duration: 0.9,
        stagger: 0.12,
        ease: "power2.out",
      });

      // Profile frame entrance
      gsap.from(profileCardRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      });

      // Gentle subtle hover loop on profile card
      gsap.to(profileCardRef.current, {
        y: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Floating badge animation loops
      gsap.to(badgeTopRef.current, {
        y: -6,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(badgeBottomRef.current, {
        y: 6,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section>
      <Container fluid className="hero-wrapper" id="home">
        <Particle />
        <Container>
          <Row className="align-items-center gy-5">
            {/* Hero Left Content */}
            <Col lg={7} className="text-start" ref={heroTextRef}>
              {/* Status Pill */}
              <div className="status-pill gsap-hero-item">
                <span className="status-dot"></span>
                <span>Available for Full-Time & High-Impact Contracts</span>
              </div>

              {/* Main Heading */}
              <h1 className="hero-heading gsap-hero-item">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              {/* Dynamic Typewriter */}
              <div className="typewriter-container gsap-hero-item">
                <span style={{ color: "var(--text-secondary)", marginRight: "12px" }}>
                  Specializing in:
                </span>
                <Type />
              </div>

              {/* Bio summary */}
              <p className="hero-description gsap-hero-item">
                {personalInfo.tagline} {personalInfo.bio[0]}
              </p>

              {/* Call to Actions */}
              <div className="hero-cta-group gsap-hero-item">
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <FaWhatsapp style={{ fontSize: "1.15rem" }} /> Chat on WhatsApp (07039537938)
                </a>
                <Link to="/project" className="btn-primary-gradient">
                  <AiOutlineFundProjectionScreen /> Explore Projects
                </Link>
                <Link to="/contact" className="btn-outline-glass">
                  <AiOutlineMail /> Contact
                </Link>
                <Link to="/resume" className="btn-outline-glass">
                  <AiOutlineDownload /> Resume
                </Link>
              </div>

              {/* Key Stats Counter Grid */}
              <Row className="g-3 pt-2 gsap-hero-item">
                {personalInfo.stats.map((stat, index) => (
                  <Col xs={6} sm={3} key={index}>
                    <div className="stat-box">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Hero Right Visual: Professional User Photo */}
            <Col lg={5} className="d-flex justify-content-center">
              <div className="hero-profile-container">
                {/* Subtle Ambient Aura */}
                <div className="hero-profile-aura"></div>

                {/* Main Profile Frame */}
                <div className="hero-profile-frame" ref={profileCardRef}>
                  <div className="hero-profile-inner">
                    <img
                      src={profileImg}
                      alt={personalInfo.name}
                      className="hero-profile-img"
                    />

                    {/* Quick overlay banner */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "1rem",
                        background:
                          "linear-gradient(to top, rgba(10, 14, 23, 0.95), transparent)",
                        textAlign: "center",
                      }}
                    >
                      <div
                        className="fw-bold"
                        style={{ color: "#ffffff", fontSize: "1.05rem" }}
                      >
                        {personalInfo.name}
                      </div>
                      <div
                        className="mono-text"
                        style={{ fontSize: "0.8rem", color: "var(--brand-blue-light)" }}
                      >
                        <FaCheckCircle className="me-1 emerald-text" /> Full Stack & AI Engineer
                      </div>
                    </div>
                  </div>

                  {/* Floating Tech Badge: Top Right */}
                  <div
                    className="hero-profile-badge-float badge-top-right"
                    ref={badgeTopRef}
                  >
                    <FaLaptopCode className="blue-text" style={{ fontSize: "1.2rem" }} />
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                        CORE FOCUS
                      </div>
                      <div className="fw-bold" style={{ fontSize: "0.85rem" }}>
                        Full Stack & AI Agents
                      </div>
                    </div>
                  </div>

                  {/* Floating WhatsApp Badge: Bottom Left */}
                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-profile-badge-float badge-bottom-left text-decoration-none"
                    ref={badgeBottomRef}
                    style={{ cursor: "pointer" }}
                  >
                    <FaWhatsapp className="whatsapp-text" style={{ fontSize: "1.25rem" }} />
                    <div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                        DIRECT CHAT
                      </div>
                      <div className="fw-bold whatsapp-text" style={{ fontSize: "0.82rem" }}>
                        07039537938
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Bento Grid & About Highlights */}
      <Home2 />
    </section>
  );
}

export default Home;
