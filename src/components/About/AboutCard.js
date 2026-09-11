import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { personalInfo } from "../../data/portfolioData";

function AboutCard() {
  return (
    <Card className="bento-card border-0 text-start">
      <Card.Body className="p-0">
        <blockquote className="blockquote mb-0">
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Hello! I’m <span className="gradient-text fw-bold">{personalInfo.name}</span>, a passionate Software Engineer based in{" "}
            <span className="cyan-text">{personalInfo.location}</span>.
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.02rem", lineHeight: 1.75 }}>
            {personalInfo.bio[1]}
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.02rem", lineHeight: 1.75 }}>
            {personalInfo.bio[2]}
          </p>

          <div className="pt-3 pb-2">
            <h5 className="gradient-text mb-3" style={{ fontSize: "1.1rem" }}>
              Core Philosophy & Interests:
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
              <li className="d-flex align-items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                <ImPointRight className="cyan-text" /> Architecting Intelligent & Autonomous AI Agent Workflows
              </li>
              <li className="d-flex align-items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                <ImPointRight className="cyan-text" /> Developing Fast, Modern, Responsive Web & Mobile Apps
              </li>
              <li className="d-flex align-items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                <ImPointRight className="cyan-text" /> Engineering Data Analytics Pipelines & Insight Dashboards
              </li>
              <li className="d-flex align-items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                <ImPointRight className="cyan-text" /> Optimizing CI/CD, Containerization & Cloud Deployments
              </li>
            </ul>
          </div>

          <div
            className="p-3 rounded-3"
            style={{
              background: "rgba(99, 102, 241, 0.08)",
              borderLeft: "3px solid var(--accent-indigo)",
            }}
          >
            <p className="mb-0 fst-italic" style={{ color: "#c7d2fe", fontSize: "0.95rem" }}>
              "Engineering is not just about writing code; it's about solving real-world problems with scalable, elegant, and impactful systems."
            </p>
            <footer className="mt-2 text-end fw-semibold" style={{ color: "var(--accent-cyan)", fontSize: "0.85rem" }}>
              — {personalInfo.name}
            </footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
