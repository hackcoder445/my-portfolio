import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="project-card-modern">
      <div className="project-card-body">
        {/* Category / Featured Badge */}
        {project.badge && (
          <div className="project-badge">{project.badge}</div>
        )}

        {/* Title */}
        <h3 className="project-title">{project.title}</h3>

        {/* Description */}
        <p className="project-desc">{project.description}</p>

        {/* Key Features Bullet list */}
        {project.features && project.features.length > 0 && (
          <div className="mb-3">
            {project.features.map((feat, i) => (
              <div
                key={i}
                className="d-flex align-items-start gap-2 mb-1"
                style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}
              >
                <FaCheckCircle
                  className="cyan-text mt-1 flex-shrink-0"
                  style={{ fontSize: "0.75rem" }}
                />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="project-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-links" style={{ flexWrap: "wrap" }}>
          {project.ghLink && (
            <a
              href={project.ghLink}
              target="_blank"
              rel="noreferrer"
              className="project-btn project-btn-secondary"
            >
              <BsGithub /> Code
            </a>
          )}
          {project.demoLink && !project.extraLinks && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="project-btn project-btn-primary"
            >
              {project.buttonText || "Visit Website"} <CgArrowTopRight />
            </a>
          )}
          {project.extraLinks &&
            project.extraLinks.map((linkItem, lIdx) => (
              <a
                key={lIdx}
                href={linkItem.url}
                target="_blank"
                rel="noreferrer"
                className="project-btn project-btn-primary"
                style={{ fontSize: "0.82rem", padding: "0.5rem 0.75rem" }}
              >
                {linkItem.label} <CgArrowTopRight />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
