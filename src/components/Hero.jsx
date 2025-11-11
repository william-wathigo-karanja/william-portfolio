import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { ChevronDown } from "react-bootstrap-icons"; // for the arrow icon

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="d-flex align-items-center justify-content-center min-vh-100 text-center position-relative"
      style={{
        background: "linear-gradient(135deg, #f8f9fc 0%, #eef3f9 100%)",
        overflow: "hidden",
        padding: "80px 0",
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-center flex-column-reverse flex-md-row">
          {/* LEFT SIDE - TEXT */}
          <Col
            md={6}
            className="mt-4 mt-md-0 text-md-start text-center d-flex flex-column justify-content-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1
                className="fw-bold display-5 mb-3"
                style={{
                  color: "#0b1d3a",
                  letterSpacing: "-0.5px",
                  lineHeight: "1.2",
                }}
              >
                William Wathigo Karanja
              </h1>

              <h5 className="text-muted mb-4">
                Applied Computing Graduate | Software Developer
              </h5>

              <p
                className="mb-4 mx-auto mx-md-0"
                style={{
                  lineHeight: "1.8",
                  fontSize: "1.05rem",
                  maxWidth: "520px",
                }}
              >
                Passionate about building modern, efficient, and user-friendly web
                and mobile applications. Dedicated to clean code, creative design,
                and crafting solutions that make a real impact.
              </p>

              <div className="d-flex flex-wrap gap-3 justify-content-md-start justify-content-center">
                <Button
                  variant="primary"
                  href="#projects"
                  className="px-4 py-2 fw-semibold"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline-primary"
                  href="#contact"
                  className="px-4 py-2 fw-semibold"
                >
                  Contact Me
                </Button>
              </div>

              {/* CONTACT INFO */}
              <div className="mt-5 small text-muted">
                <div>📱 +254 718 002 124</div>
                <div>
                  ✉️{" "}
                  <a
                    href="mailto:wathigowilliam@gmail.com"
                    className="text-decoration-none text-dark"
                  >
                    wathigowilliam@gmail.com
                  </a>
                </div>
                <div>
                  🐙{" "}
                  <a
                    href="https://github.com/william-wathigo-karanja"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    github.com/william-wathigo-karanja
                  </a>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* RIGHT SIDE - IMAGE */}
          <Col
            md={5}
            className="text-center d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="p-3 bg-white rounded-circle shadow-sm hero-photo"
              style={{
                width: "260px",
                height: "260px",
                overflow: "hidden",
                border: "5px solid #fff",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                cursor: "pointer",
              }}
            >
              <Image
                src="/William.png"
                alt="William Wathigo Karanja"
                roundedCircle
                fluid
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* SCROLL DOWN INDICATOR */}
      <motion.div
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <a href="#about" className="text-decoration-none text-muted small">
          <ChevronDown size={28} className="text-primary" />
        </a>
        <div className="text-muted small mt-1">Scroll</div>
      </motion.div>
    </motion.section>
  );
}
