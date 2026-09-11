import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import { projectCategories, projects } from "../../data/portfolioData";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div style={{ position: "relative", minHeight: "100vh", paddingTop: "6rem" }}>
      <Particle />
      <Container className="py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="status-pill mb-2">
            <span>Portfolio Showcase</span>
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p style={{ color: "#e2e8f0", maxWidth: "680px", margin: "0.5rem auto 0", fontSize: "1.02rem" }}>
            Production client platforms, institutional school websites, and cloud-based academic result portals engineered by Oladoke Simeon.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-tabs-wrapper mb-5">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`category-tab-btn ${
                activeCategory === cat.id ? "active" : ""
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <Row className="g-4 mb-5">
          {filteredProjects.map((project) => (
            <Col md={6} lg={4} key={project.id}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>

        {/* Bottom CTA Card */}
        <div
          className="bento-card text-center p-4 p-md-5 my-5"
          style={{
            background:
              "linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(99, 102, 241, 0.12))",
            border: "1px solid rgba(6, 182, 212, 0.2)",
          }}
        >
          <h2 style={{ fontSize: "1.9rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            Have a project or system you need built?
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "560px", margin: "0 auto 1.5rem" }}>
            Whether it's an end-to-end full-stack platform, an AI agent workflow, or complex database architecture, let's talk.
          </p>
          <Link to="/contact" className="btn-primary-gradient d-inline-flex">
            <AiOutlineMail /> Initiate Conversation
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
