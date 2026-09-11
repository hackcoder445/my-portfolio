import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiOutlineDownload,
  AiOutlinePrinter,
} from "react-icons/ai";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaWhatsapp,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";
import {
  personalInfo,
  skills,
  experience,
  education,
  certifications,
  skillCategories,
} from "../../data/portfolioData";
import resumePdf from "../../Assets/OLADOKE SIMEON TEMITOPE_ COMPUTER_GENERAL EDUCATION (PHYSICS).pdf";

function ResumeNew() {
  const resumeRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  // Group skills by category for the resume
  const skillGroups = skillCategories
    .filter((c) => c.id !== "all")
    .map((cat) => ({
      label: cat.name,
      items: skills.filter((s) => s.category === cat.id).map((s) => s.name),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="resume-section-wrapper" style={{ position: "relative", minHeight: "100vh", paddingTop: "6.5rem", paddingBottom: "4rem" }}>
      <Particle />
      <Container style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="status-pill mb-2">
            <span>Official Curriculum Vitae</span>
          </div>
          <h1 style={{ fontSize: "2.6rem", fontWeight: 800, color: "#ffffff" }}>
            Resume &amp; <span className="gradient-text">Credentials</span>
          </h1>
          <p style={{ color: "#e2e8f0", maxWidth: "640px", margin: "0.5rem auto 1.5rem", fontSize: "1.05rem" }}>
            Official CV of Oladoke Simeon Temitope — Computer Science graduate, Physics Educator, Full Stack Developer &amp; AI Builder.
          </p>

          {/* Top Quick Actions */}
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href={resumePdf}
              download="OLADOKE_SIMEON_TEMITOPE_CV.pdf"
              className="btn-primary-gradient"
            >
              <AiOutlineDownload style={{ fontSize: "1.15rem" }} /> Download Official PDF
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-glass"
            >
              <FaExternalLinkAlt /> Open PDF in New Tab
            </a>
            <button
              onClick={handlePrint}
              className="btn-outline-glass"
              style={{ border: "1px solid var(--border-card)", cursor: "pointer" }}
            >
              <AiOutlinePrinter /> Print Resume
            </button>
          </div>
        </div>


        {/* ── STRUCTURED DIGITAL RESUME CARD ── */}
        <Row className="justify-content-center">
          <Col lg={11}>
            <div
              ref={resumeRef}
              className="bento-card resume-paper-card"
            >
              {/* ── Header Block ── */}
              <div className="resume-header-block">
                <Row className="align-items-center gy-3">
                  <Col lg={8}>
                    <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.3rem" }}>
                      {personalInfo.name}
                    </h2>
                    <div className="cyan-text fw-semibold" style={{ fontSize: "1.05rem", marginBottom: "0.6rem" }}>
                      Computer Science Graduate • Physics Educator • Full Stack &amp; AI Engineer
                    </div>
                    <div className="resume-contact-row">
                      <span><FaMapMarkerAlt className="me-1 cyan-text" />No 26, Ekundayo Street, Papa Epe, Lagos State</span>
                      <span><FaPhoneAlt className="me-1 cyan-text" />+234 703 953 7938, +234 903 593 9419</span>
                    </div>
                  </Col>
                  <Col lg={4} className="text-lg-end">
                    <div className="resume-links-column">
                      <a href={`mailto:${personalInfo.email}`} className="resume-meta-link">
                        <FaEnvelope className="me-1 cyan-text" />{personalInfo.email}
                      </a>
                      <a href={personalInfo.github} target="_blank" rel="noreferrer" className="resume-meta-link">
                        <FaGithub className="me-1 cyan-text" />github.com/hackcoder445
                      </a>
                      <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" className="resume-meta-link">
                        <FaWhatsapp className="me-1" style={{ color: "var(--whatsapp-green)" }} />WhatsApp: 07039537938
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* ── Profile Statement ── */}
              <div className="resume-section-body">
                <h4 className="resume-subheading">
                  Personal Profile Statement
                </h4>
                <p className="resume-text">
                  A motivated, adaptable, and detail-oriented Computer Science graduate seeking an IT role to leverage technical expertise in software development, networking, and system troubleshooting.
                </p>
              </div>

              {/* ── Education & Academic Credentials ── */}
              <div className="resume-section-body">
                <h4 className="resume-subheading">
                  <FaGraduationCap className="me-2 cyan-text" />Education &amp; Qualifications
                </h4>
                <div className="d-flex flex-column gap-3">
                  {education.map((edu, idx) => (
                    <div key={idx} className="resume-item-card">
                      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
                        <span className="fw-bold" style={{ color: "#ffffff", fontSize: "1.05rem" }}>
                          {edu.degree}
                        </span>
                        <span className="resume-tag-pill">{edu.period}</span>
                      </div>
                      <div style={{ color: "#38bdf8", fontSize: "0.95rem", fontWeight: 500 }}>
                        {edu.institution}
                      </div>
                      {edu.details && (
                        <div style={{ color: "#cbd5e1", fontSize: "0.9rem", marginTop: "0.25rem" }}>
                          {edu.details}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Professional Certifications ── */}
              <div className="resume-section-body">
                <h4 className="resume-subheading">
                  <FaCertificate className="me-2 cyan-text" />Cisco Networking Academy Certifications (NetAcad)
                </h4>
                <Row className="g-3">
                  {certifications.map((cert, idx) => (
                    <Col md={6} key={idx}>
                      <div className="resume-item-card h-100">
                        <div style={{ color: "#38bdf8", fontWeight: 700, fontSize: "0.98rem" }}>
                          {cert.title}
                        </div>
                        <div style={{ color: "#93c5fd", fontSize: "0.8rem", marginBottom: "0.4rem" }}>
                          {cert.issuer}
                        </div>
                        <div style={{ color: "#e2e8f0", fontSize: "0.88rem", lineHeight: 1.5 }}>
                          {cert.skills}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* ── Experience & Employment ── */}
              <div className="resume-section-body">
                <h4 className="resume-subheading">
                  Employment &amp; Technical Experience
                </h4>
                <div className="d-flex flex-column gap-3">
                  {experience.map((exp, idx) => (
                    <div key={idx} className="resume-item-card">
                      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
                        <div>
                          <span style={{ fontWeight: 700, color: "#ffffff", fontSize: "1.02rem" }}>
                            {exp.role}
                          </span>
                          <span style={{ color: "#38bdf8", fontSize: "0.92rem", marginLeft: "0.5rem" }}>
                            @ {exp.company}
                          </span>
                        </div>
                        <span className="resume-tag-pill">{exp.period}</span>
                      </div>
                      <div style={{ fontSize: "0.93rem", color: "#e2e8f0", lineHeight: 1.65 }}>
                        {exp.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Technical Skills Matrix ── */}
              <div className="resume-section-body">
                <h4 className="resume-subheading">
                  Core Technical Skills
                </h4>
                <div className="d-flex flex-column gap-3">
                  {skillGroups.map((group, idx) => (
                    <Row key={idx} className="align-items-start g-2">
                      <Col xs={12} sm={3}>
                        <span style={{ fontWeight: 600, fontSize: "0.88rem", color: "#38bdf8", fontFamily: "'JetBrains Mono', monospace" }}>
                          {group.label}
                        </span>
                      </Col>
                      <Col xs={12} sm={9}>
                        <div className="tech-tag-cloud">
                          {group.items.map((item, iIdx) => (
                            <span key={iIdx} className="tech-tag-pill">
                              {item}
                            </span>
                          ))}
                        </div>
                      </Col>
                    </Row>
                  ))}
                </div>
              </div>

              {/* ── References & Footer ── */}
              <div className="resume-footer-block">
                <Row className="gy-3 align-items-center">
                  <Col md={8}>
                    <div style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.95rem" }}>
                      Academic &amp; Professional Reference:
                    </div>
                    <div style={{ color: "#cbd5e1", fontSize: "0.88rem" }}>
                      Mr. Ishola Abduljalah Ramadan — DEED Facilitator &amp; CEO Ramaj Engineering Services
                    </div>
                    <div style={{ color: "#93c5fd", fontSize: "0.82rem" }}>
                      The Federal Polytechnic Bida, Niger State • Tel: +234 813 796 2334
                    </div>
                  </Col>
                  <Col md={4} className="text-md-end">
                    <a
                      href={resumePdf}
                      download="OLADOKE_SIMEON_TEMITOPE_CV.pdf"
                      className="btn-primary-gradient"
                      style={{ fontSize: "0.88rem", padding: "0.55rem 1.2rem" }}
                    >
                      <AiOutlineDownload /> Download PDF
                    </a>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
