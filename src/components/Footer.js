import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { personalInfo } from "../data/portfolioData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <Container>
        <Row className="align-items-center gy-3">
          <Col md={5} className="text-center text-md-start">
            <span className="fw-bold" style={{ color: "var(--text-primary)" }}>
              {personalInfo.name}
            </span>
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Full Stack, AI Agent Builder & Data Analytics Engineer
            </div>
          </Col>

          <Col md={3} className="text-center">
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Copyright © {currentYear} • All rights reserved
            </span>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <div className="d-inline-flex gap-2">
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
                title="Email"
              >
                <AiFillMail />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
