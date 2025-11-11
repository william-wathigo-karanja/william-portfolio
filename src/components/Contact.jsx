import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="fw-bold">Contact Me</h2>
            <p className="text-muted">
              I’m always open to discussing new projects, collaborations, or opportunities.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {/* Contact Form */}
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message..." required />
              </Form.Group>

              <Button variant="primary" type="submit" disabled>
                Send Message (coming soon)
              </Button>
              <div className="small text-muted mt-2">
                *Form submission integration via EmailJS or Formspree can be added later
              </div>
            </Form>
          </Col>

          {/* Contact Info */}
          <Col md={5} className="mt-5 mt-md-0">
            <div className="p-4 bg-white shadow-sm rounded">
              <h5 className="fw-bold mb-3 text-primary">Get in Touch</h5>
              <p className="mb-1">
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                <a href="tel:+254718002124" className="text-decoration-none text-dark">
                  +254 718 002 124
                </a>
              </p>
              <p className="mb-1">
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                <a href="mailto:wathigowilliam@gmail.com" className="text-decoration-none text-dark">
                  wathigowilliam@gmail.com
                </a>
              </p>
              <hr />
              <h6 className="fw-bold text-muted mt-3 mb-2">Social Links</h6>
              <div className="d-flex gap-3">
                <a
                  href="https://github.com/william-wathigo-karanja"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark fs-5"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/william-wathigo-396670254/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark fs-5"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/w.athi.go/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark fs-5"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
