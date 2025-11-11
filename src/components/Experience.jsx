import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Experience() {
  return (
    <section id="experience" className="py-5 bg-white">
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="fw-bold">Experience</h2>
            <p className="text-muted">
              Practical industry experience that strengthened my technical and professional skills.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="shadow-sm border-0 mb-4">
              <Card.Body>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                  <div>
                    <Card.Title className="fw-bold text-primary mb-1">
                      Business Development & Information Technology Intern
                    </Card.Title>
                    <Card.Subtitle className="text-muted">
                      OML Africa Logistics — Mai Mahiu, Kenya
                    </Card.Subtitle>
                  </div>
                  <div className="text-md-end text-muted small">
                    July 2025 – September 2025
                  </div>
                </div>

                <Card.Text>
                  <ul className="mb-0">
                    <li>
                      Assisted in asset tagging and data upload on the Fleet Wave system, improving
                      record management and data accuracy.
                    </li>
                    <li>
                      Reviewed cybersecurity documentation and identified areas for policy improvement
                      to strengthen compliance with IT standards.
                    </li>
                    <li>
                      Collaborated with a third-party software development partner during the website revamp,
                      ensuring business goals were met.
                    </li>
                    <li>
                      Provided technical feedback and contributed to website functionality and user experience improvements.
                    </li>
                    <li>
                      Demonstrated teamwork, communication, and analytical problem-solving while supporting
                      the Business Development & IT team.
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
