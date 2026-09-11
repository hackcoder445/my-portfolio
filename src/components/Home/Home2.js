import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { personalInfo } from "../../data/portfolioData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FaLinkedinIn, FaLayerGroup, FaServer, FaRobot, FaDatabase, FaWhatsapp } from "react-icons/fa";

function Home2() {
  const pillars = [
    {
      icon: <FaLayerGroup />,
      title: "Full-Stack Web & Mobile",
      desc: "Creating high-performance, responsive interfaces using React.js, Next.js, and React Native paired with modern CSS architectures (Tailwind & Bootstrap).",
      tags: ["React.js", "Next.js", "React Native", "Tailwind CSS", "JavaScript"],
    },
    {
      icon: <FaServer />,
      title: "Backend & Cloud Systems",
      desc: "Designing secure, modular microservices and RESTful APIs using Node.js, PHP Laravel, and Python (Django, Flask, C++) backed by CI/CD and AWS.",
      tags: ["Node.js", "Laravel", "Python", "Django", "CI/CD", "AWS"],
    },
    {
      icon: <FaRobot />,
      title: "Autonomous AI Agents",
      desc: "Architecting intelligent agent workflows, multi-step tool execution, and prompt-driven reasoning systems powered by modern Python and Node packages.",
      tags: ["AI Agents", "Python", "NPM Tooling", "Automation", "LLMs"],
    },
    {
      icon: <FaDatabase />,
      title: "Databases & Data Analytics",
      desc: "Engineering multi-model data storage (PostgreSQL, MongoDB, MySQL) combined with deep analytics and visualizations in Power BI, Excel, and Pandas.",
      tags: ["PostgreSQL", "MongoDB", "MySQL", "Power BI", "Excel", "Data Analytics"],
    },
  ];

  return (
    <Container fluid className="py-5" style={{ position: "relative", zIndex: 1 }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="status-pill mb-2">
            <span>Engineering Pillars</span>
          </div>
          <h2 style={{ fontSize: "2.3rem", fontWeight: 800 }}>
            What I Bring To <span className="gradient-text">The Table</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "680px", margin: "0.5rem auto 0" }}>
            From high-converting user interfaces to resilient distributed backends, intelligent agents, and analytical dashboards.
          </p>
        </div>

        {/* Bento Grid */}
        <Row className="g-4 mb-5">
          {pillars.map((pillar, idx) => (
            <Col md={6} key={idx}>
              <div className="bento-card">
                <div className="bento-icon-wrapper">{pillar.icon}</div>
                <h3 className="bento-title">{pillar.title}</h3>
                <p className="bento-text">{pillar.desc}</p>
                <div className="tech-tag-cloud mt-3">
                  {pillar.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* About Bio Callout */}
        <div
          className="bento-card p-4 p-md-5 text-start"
          style={{
            background: "linear-gradient(135deg, rgba(13, 18, 36, 0.9), rgba(16, 22, 42, 0.95))",
            border: "1px solid rgba(99, 102, 241, 0.25)",
          }}
        >
          <Row className="align-items-center gy-4">
            <Col lg={8}>
              <span className="brand-badge mb-3 d-inline-block">About Simeon</span>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem" }}>
                Dedicated to Crafting High-Caliber Digital Products
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1rem" }}>
                {personalInfo.bio[1]}
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                {personalInfo.bio[2]}
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Link to="/about" className="btn-primary-gradient mb-2 d-inline-flex">
                View Full Skill Matrix <AiOutlineArrowRight />
              </Link>
            </Col>
          </Row>
        </div>

        {/* Social Connection Hub */}
        <div className="text-center mt-5 pt-4">
          <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            Have a project in mind, an opportunity, or want to explore an AI agent architecture?
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link footer-social-whatsapp"
              title="WhatsApp (07039537938)"
            >
              <FaWhatsapp />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              title="GitHub"
            >
              <AiFillGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              title="Twitter"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-link"
              title="Direct Email"
            >
              <AiFillMail />
            </a>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Home2;
