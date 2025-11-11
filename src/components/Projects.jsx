import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="fw-bold">Featured Project</h2>
            <p className="text-muted">
              A glimpse into one of my academic projects. You can explore more on my GitHub profile.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-sm border-0">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/800x400.png?text=CONNECT+Project+Preview"
                alt="CONNECT: Bridging Minds project preview"
              />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">
                  CONNECT: Bridging Minds
                </Card.Title>
                <Card.Text>
                  A full-stack mental wellness platform designed to connect clients with certified therapists. 
                  Developed using <strong>React.js</strong> (frontend) and <strong>Node.js + MongoDB</strong> (backend).
                  Includes secure user authentication, therapist search, scheduling features, and modular architecture for scalability.
                </Card.Text>

                <div className="d-flex gap-2 mt-3">
                  <Button
                    variant="primary"
                    href="https://github.com/william-wathigo-karanja"
                    target="_blank"
                  >
                    View on GitHub
                  </Button>
                  <Button
                    variant="outline-primary"
                    href="#contact"
                  >
                    Contact Me
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 text-center">
          <Col>
            <Button
              variant="secondary"
              href="https://github.com/william-wathigo-karanja?tab=repositories"
              target="_blank"
            >
              View More Projects on GitHub
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
