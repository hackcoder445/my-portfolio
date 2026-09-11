import React, { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import Particle from "../Particle";
import { personalInfo } from "../../data/portfolioData";
import {
  AiOutlineMail,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineCheck,
  AiOutlineCopy,
  AiOutlineSend,
} from "react-icons/ai";
import { FaLinkedinIn, FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Open mailto fallback with prefilled content
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", paddingTop: "6.5rem", paddingBottom: "4rem" }}>
      <Particle />
      <Container className="py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="status-pill mb-2">
            <span>Direct Communication</span>
          </div>
          <h1 style={{ fontSize: "2.6rem", fontWeight: 800 }}>
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0.5rem auto 0" }}>
            Reach out directly via WhatsApp, email, or send a message using the form below.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {/* Contact Details & Info */}
          <Col lg={5}>
            <div className="contact-card h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="bento-title mb-3" style={{ fontSize: "1.35rem" }}>
                  Let's Discuss Solutions
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Available for Full-Stack Development, AI Agent Architecture, and Data Analytics contracts and full-time positions.
                </p>

                {/* WhatsApp Highlight Pill */}
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-pill contact-info-pill-whatsapp text-decoration-none"
                >
                  <div className="contact-icon-box contact-icon-box-whatsapp">
                    <FaWhatsapp />
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <div style={{ fontSize: "0.72rem", color: "var(--whatsapp-green)", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
                      WHATSAPP (DIRECT CHAT)
                    </div>
                    <div className="fw-bold" style={{ color: "#ffffff" }}>
                      +234 703 953 7938
                    </div>
                  </div>
                  <div>
                    <span className="badge bg-success" style={{ fontSize: "0.75rem" }}>
                      Online
                    </span>
                  </div>
                </a>

                {/* Email Pill */}
                <div className="contact-info-pill" role="button" onClick={handleCopyEmail}>
                  <div className="contact-icon-box">
                    <AiOutlineMail />
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>
                      EMAIL (CLICK TO COPY)
                    </div>
                    <div className="fw-semibold text-truncate" style={{ color: "var(--text-main)" }}>
                      {personalInfo.email}
                    </div>
                  </div>
                  <div>
                    {copied ? (
                      <span className="text-success fw-bold d-flex align-items-center gap-1" style={{ fontSize: "0.8rem" }}>
                        <AiOutlineCheck /> Copied!
                      </span>
                    ) : (
                      <AiOutlineCopy style={{ color: "var(--text-secondary)" }} />
                    )}
                  </div>
                </div>

                {/* Phone Pill */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="contact-info-pill text-decoration-none"
                >
                  <div className="contact-icon-box">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>
                      PHONE CALL
                    </div>
                    <div className="fw-semibold" style={{ color: "var(--text-main)" }}>
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                {/* Location Pill */}
                <div className="contact-info-pill">
                  <div className="contact-icon-box">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>
                      LOCATION
                    </div>
                    <div className="fw-semibold" style={{ color: "var(--text-main)" }}>
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-top border-secondary border-opacity-25">
                <div className="mono-text mb-3" style={{ fontSize: "0.8rem", color: "var(--brand-blue-light)" }}>
                  Professional Channels
                </div>
                <div className="d-flex gap-2">
                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-link footer-social-whatsapp"
                    title="WhatsApp"
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
                </div>
              </div>
            </div>
          </Col>

          {/* Interactive Message Form */}
          <Col lg={7}>
            <div className="contact-card">
              <h3 className="bento-title mb-1" style={{ fontSize: "1.35rem" }}>
                Send a Message
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Leave a message below with your requirements or job proposal.
              </p>

              {submitted && (
                <Alert
                  variant="success"
                  className="mb-4"
                  style={{
                    background: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    color: "#6ee7b7",
                  }}
                  onClose={() => setSubmitted(false)}
                  dismissible
                >
                  Your message composer has been initialized. Thank you for reaching out!
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="contact-form">
                <Row className="g-3 mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                        Your Name *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                        Your Email *
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="e.g. alex@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Label style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    Subject
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Full-Stack Role / AI Agent Development"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    Your Message *
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Describe your project, timeline, or position..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <button type="submit" className="btn-primary-gradient w-100 justify-content-center py-3">
                  <AiOutlineSend /> Send Message
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
