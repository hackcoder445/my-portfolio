import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      className="justify-content-center py-5 text-center"
      style={{ color: "white" }}
    >
      <div className="status-pill mb-2 mx-auto" style={{ width: "fit-content" }}>
        <span>Activity Log</span>
      </div>
      <h2 style={{ fontSize: "2.1rem", fontWeight: 800, marginBottom: "1.5rem" }}>
        Days I <span className="gradient-text">Code</span>
      </h2>
      <div className="d-flex justify-content-center overflow-auto py-3">
        <GitHubCalendar
          username="hackcoder445"
          blockSize={15}
          blockMargin={5}
          color="#06b6d4"
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
