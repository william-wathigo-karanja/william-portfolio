import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Skills() {
  const skillsData = [
    {
      title: "Programming Languages",
      items: ["Java", "C#", "C++", "C", "Python", "JavaScript", "PHP"],
    },
    {
      title: "Web Development",
      items: ["HTML5", "CSS3", "Bootstrap", "React.js", "Node.js"],
    },
    {
      title: "Mobile Development",
      items: ["Android Studio (Java)", "Firebase integration"],
    },
    {
      title: "Databases",
      items: ["MySQL", "MongoDB", "SQLite"],
    },
    {
      title: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code", "XAMPP", "Firebase"],
    },
    {
      title: "Software Concepts",
      items: ["REST APIs", "MVC Architecture", "CRUD Operations", "Agile (Scrum Basics)"],
    },
    {
      title: "UI / UX Knowledge",
      items: ["Wireframing (Figma)", "Basic prototyping & user flows"],
    },
  ];

  return (
    <section id="skills" className="py-5 bg-white">
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="fw-bold">Technical Skills</h2>
            <p className="text-muted">
              A quick overview of my core technical abilities and tools I work with.
            </p>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3} className="g-4">
          {skillsData.map((category, index) => (
            <Col key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold text-primary mb-3">
                    {category.title}
                  </Card.Title>
                  <ul className="list-unstyled mb-0">
                    {category.items.map((skill, i) => (
                      <li key={i} className="mb-1">
                        <i className="bi bi-check-circle text-success me-2"></i>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
