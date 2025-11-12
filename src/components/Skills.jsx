import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import {
  CodeSlash,
  Laptop,
  Phone,
  Wrench,
} from "react-bootstrap-icons";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <CodeSlash size={40} className="text-primary mb-3" />,
      skills: ["Java", "C#", "C++", "C", "Python", "JavaScript", "PHP"],
    },
    {
      title: "Web Development",
      icon: <Laptop size={40} className="text-primary mb-3" />,
      skills: ["HTML5", "CSS3", "Bootstrap", "React.js", "Node.js"],
    },
    {
      title: "Mobile & Databases",
      icon: <Phone size={40} className="text-primary mb-3" />,
      skills: ["Android Studio", "Firebase", "MySQL", "MongoDB", "SQLite"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={40} className="text-primary mb-3" />,
      skills: ["Git", "GitHub", "VS Code", "XAMPP", "Figma"],
    },
  ];

  return (
    <>
      {/* Smooth divider from About section */}
      <SectionDivider flip />

      <section
        id="skills"
        className="py-5 text-center"
        style={{
          background: "linear-gradient(180deg, #f6f8fb 0%, #ffffff 100%)",
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
              Technical Skills
            </h2>
            <p className="text-muted mb-5">
              A selection of languages, frameworks, and tools I use to build
              modern, high-performing applications.
            </p>
          </motion.div>

          <Row xs={1} md={2} lg={4} className="g-4">
            {skillCategories.map((category, index) => (
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
                    className="border-0 shadow-sm p-3 h-100"
                    style={{
                      borderRadius: "16px",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <Card.Body>
                      {category.icon}
                      <Card.Title
                        className="fw-semibold mb-3"
                        style={{ color: "#0b1d3a" }}
                      >
                        {category.title}
                      </Card.Title>
                      <ul
                        className="list-unstyled text-muted"
                        style={{ lineHeight: "1.8", fontSize: "0.95rem" }}
                      >
                        {category.skills.map((skill, idx) => (
                          <li key={idx}>{skill}</li>
                        ))}
                      </ul>
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
