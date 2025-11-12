import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import {
  Envelope,
  Telephone,
  Github,
  Linkedin,
  Instagram,
} from "react-bootstrap-icons";

export default function Contact() {
  return (
    <>
      {/* Divider from Experience */}
      <SectionDivider flip />

      <section
        id="contact"
        className="py-5 text-center"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f6f8fb 100%)",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold mb-4" style={{ color: "#0b1d3a" }}>
              Get In Touch
            </h2>
            <p className="text-muted mb-5">
              I’m currently open to new opportunities, collaborations, and
              freelance projects. Let’s connect and build something great
              together!
            </p>
          </motion.div>

          <Row className="justify-content-center">
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-4 bg-white shadow-sm rounded-4 text-start"
              >
                <h5 className="fw-semibold mb-4 text-center text-md-start">
                  Contact Information
                </h5>

                <div className="d-flex align-items-center mb-3">
                  <Telephone className="text-primary me-3" />
                  <a
                    href="tel:+254718002124"
                    className="text-decoration-none text-dark"
                  >
                    +254 718 002 124
                  </a>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <Envelope className="text-primary me-3" />
                  <a
                    href="mailto:wathigowilliam@gmail.com"
                    className="text-decoration-none text-dark"
                  >
                    wathigowilliam@gmail.com
                  </a>
                </div>

                <div className="mt-4 d-flex gap-3">
                  <a
                    href="https://github.com/william-wathigo-karanja"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark"
                  >
                    <Github size={26} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/william-wathigo-396670254"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark"
                  >
                    <Linkedin size={26} />
                  </a>
                  <a
                    href="https://www.instagram.com/w.athi.go/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark"
                  >
                    <Instagram size={26} />
                  </a>
                </div>

                <div className="mt-5 text-center text-md-start">
                  <Button
                    variant="primary"
                    size="lg"
                    href="mailto:wathigowilliam@gmail.com"
                    className="px-5 py-2 fw-semibold"
                  >
                    Let’s Work Together
                  </Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer
        className="py-3 text-center mt-5"
        style={{
          backgroundColor: "#0b1d3a",
          color: "white",
          fontSize: "0.9rem",
        }}
      >
        <Container>
          © {new Date().getFullYear()} William Wathigo Karanja. All Rights Reserved.
        </Container>
      </footer>
    </>
  );
}
