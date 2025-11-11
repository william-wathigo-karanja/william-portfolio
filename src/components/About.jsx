import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="fw-bold">About Me</h2>
            <p className="text-muted">
              Get to know more about my background, education, and what drives me as a software developer.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6}>
            <p>
              I’m <strong>William Wathigo Karanja</strong>, an enthusiastic and
              committed <strong>Applied Computing graduand</strong> specializing
              in <strong>Software Development</strong> from KCA University.
              Passionate about crafting modern, efficient, and user-friendly web
              and mobile applications, I enjoy turning ideas into digital
              solutions that make an impact.
            </p>
            <p>
              I’m skilled in both front-end and back-end technologies — from
              <strong> React.js</strong> and <strong>Bootstrap</strong> to{" "}
              <strong>Node.js</strong> and <strong>MySQL/MongoDB</strong> — and
              I’m continuously learning to refine my craft and stay updated with
              new technologies.
            </p>
            <p>
              My internship at <strong>OML Africa Logistics</strong> helped me
              develop practical experience in IT systems, cybersecurity
              documentation, and cross-team collaboration on web projects.
            </p>
          </Col>

          <Col md={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h5 className="fw-bold mb-3">Education</h5>
                <p className="mb-1">
                  <strong>KCA University – Nairobi, Kenya</strong>
                </p>
                <p className="mb-1">
                  Bachelor of Science in Applied Computing (Software Development
                  Option)
                </p>
                <p className="text-muted">Expected Graduation: November 28, 2025</p>
                <hr />
                <h5 className="fw-bold mb-3">Core Competencies</h5>
                <ul className="mb-0">
                  <li>Full-stack Web & Mobile Development</li>
                  <li>Database Design and Management</li>
                  <li>REST API Development</li>
                  <li>Problem Solving & Analytical Thinking</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
