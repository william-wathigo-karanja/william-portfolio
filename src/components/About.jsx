import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

export default function About() {
  return (
    <>
      {/* Smooth Wave Transition from Hero */}
      <SectionDivider flip />

      <section
        id="about"
        className="py-5"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f6f8fb 100%)",
        }}
      >
        <Container>
          <Row className="align-items-center">
            {/* LEFT SIDE - IMAGE */}
            <Col
              md={5}
              className="text-center mb-4 mb-md-0 d-flex justify-content-center align-items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-3 bg-white rounded shadow-sm"
                style={{
                  width: "240px",
                  height: "240px",
                  overflow: "hidden",
                  borderRadius: "20px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/William.png"
                  alt="William Wathigo Karanja"
                  fluid
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </Col>

            {/* RIGHT SIDE - TEXT */}
            <Col md={7} className="text-md-start text-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="fw-bold mb-3" style={{ color: "#0b1d3a" }}>
                  About Me
                </h2>

                <p
                  className="lead mb-3"
                  style={{ color: "#6c757d", fontWeight: "500" }}
                >
                  A passionate software developer dedicated to designing
                  functional, efficient, and visually appealing digital
                  solutions.
                </p>

                <p
                  style={{
                    lineHeight: "1.8",
                    maxWidth: "600px",
                    margin: "0 auto",
                  }}
                >
                  I’m an <strong>Applied Computing graduate</strong> with a strong
                  background in full-stack development, UI/UX, and software design.
                  I enjoy crafting clean and intuitive user experiences — whether
                  for web or mobile platforms. My approach to coding combines
                  creativity, collaboration, and a commitment to continuous
                  learning.
                </p>

                <p className="mt-4">
                  <strong>Key Strengths:</strong> React.js, Node.js, Java, C#,
                  Android Studio, Firebase, MySQL, Git, and UI/UX design.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
