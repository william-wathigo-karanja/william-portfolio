import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import { Briefcase, People } from "react-bootstrap-icons";

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Intern",
      organization: "OML Africa Logistics",
      period: "July 2025 – September 2025",
      description:
        "Contributed to internal web tools for logistics and data tracking. Assisted in developing responsive UI layouts, optimizing database queries, and improving application performance.",
      icon: <Briefcase size={28} className="text-primary" />,
    },
    {
      title: "Facilitator & Volunteer",
      organization: "The Ascent Leadership Program",
      period: "2019 – 2025",
      description:
        "Began as a trainee in 2019 and later transitioned into facilitation and mentorship roles from 2022 onward, assisting in sessions, mentoring peers, and supporting leadership development activities.",
      icon: <People size={28} className="text-primary" />,
    },
  ];

  return (
    <>
      {/* Wave divider from Projects section */}
      <SectionDivider flip />

      <section
        id="experience"
        className="py-5 text-center"
        style={{
          background: "linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%)",
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
              Experience & Leadership
            </h2>
            <p className="text-muted mb-5">
              A blend of professional and volunteer experiences that shaped my
              technical and leadership journey.
            </p>
          </motion.div>

          <Row className="g-4 justify-content-center">
            {experiences.map((exp, index) => (
              <Col md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <Card
                    className="border-0 shadow-sm text-start p-4 h-100"
                    style={{
                      borderRadius: "16px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">{exp.icon}</div>
                      <div>
                        <h5 className="fw-semibold mb-1">{exp.title}</h5>
                        <div
                          className="text-primary fw-semibold small"
                          style={{ letterSpacing: "0.3px" }}
                        >
                          {exp.organization}
                        </div>
                      </div>
                    </div>

                    <div
                      className="text-muted small mb-2"
                      style={{ fontStyle: "italic" }}
                    >
                      {exp.period}
                    </div>

                    <p className="text-muted mb-0" style={{ lineHeight: "1.8" }}>
                      {exp.description}
                    </p>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
