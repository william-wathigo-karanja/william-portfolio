import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import { Github, BoxArrowUpRight } from "react-bootstrap-icons";

export default function Projects() {
  const projects = [
    {
      title: "CONNECT: Bridging Minds",
      description:
        "A mental health and awareness platform designed to connect users with professionals, provide resources, and promote open discussions. Built with React, Node.js, and Firebase.",
      tech: ["React", "Node.js", "Firebase", "Bootstrap"],
      image: "https://via.placeholder.com/600x350.png?text=CONNECT+Project",
      github: "https://github.com/william-wathigo-karanja",
      demo: "#",
    },
    {
      title: "Simple E-commerce Website",
      description:
        "An academic project simulating a simple e-commerce flow with product listings, cart functionality, and checkout simulation.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      image: "https://via.placeholder.com/600x350.png?text=E-commerce+Project",
      github: "https://github.com/william-wathigo-karanja",
      demo: "#",
    },
  ];

  return (
    <>
      {/* Smooth divider from Skills section */}
      <SectionDivider flip />

      <section
        id="projects"
        className="py-5 text-center"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%)",
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
              Featured Projects
            </h2>
            <p className="text-muted mb-5">
              A selection of my recent projects, including personal and
              academic work.
            </p>
          </motion.div>

          <Row xs={1} md={2} className="g-4">
            {projects.map((project, index) => (
              <Col key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <Card
                    className="h-100 border-0 shadow-sm"
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                    />
                    <Card.Body className="text-start">
                      <Card.Title
                        className="fw-semibold mb-3"
                        style={{ color: "#0b1d3a" }}
                      >
                        {project.title}
                      </Card.Title>
                      <Card.Text className="text-muted mb-3">
                        {project.description}
                      </Card.Text>

                      <div className="mb-3">
                        {project.tech.map((t, i) => (
                          <Badge
                            bg="light"
                            text="dark"
                            key={i}
                            className="me-2 mb-2 border"
                            style={{ fontWeight: "500" }}
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <div className="d-flex gap-2">
                        <Button
                          variant="primary"
                          size="sm"
                          href={project.github}
                          target="_blank"
                          className="d-flex align-items-center gap-1"
                        >
                          <Github size={16} /> GitHub
                        </Button>
                        {project.demo !== "#" && (
                          <Button
                            variant="outline-primary"
                            size="sm"
                            href={project.demo}
                            target="_blank"
                            className="d-flex align-items-center gap-1"
                          >
                            <BoxArrowUpRight size={16} /> Live Demo
                          </Button>
                        )}
                      </div>
                    </Card.Body>
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
