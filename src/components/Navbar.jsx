import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function PortfolioNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setExpanded(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        className="bg-white shadow-sm py-3"
      >
        <Container>
          {/* Brand Name */}
          <Navbar.Brand
            href="#hero"
            onClick={(e) => handleScroll(e, "#hero")}
            className="fw-bold text-primary"
            style={{ letterSpacing: "0.5px" }}
          >
            William<span className="text-dark">.</span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />

          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="gap-3 fw-semibold">
              <Nav.Link href="#about" onClick={(e) => handleScroll(e, "#about")}>
                About
              </Nav.Link>
              <Nav.Link
                href="#skills"
                onClick={(e) => handleScroll(e, "#skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                onClick={(e) => handleScroll(e, "#projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#experience"
                onClick={(e) => handleScroll(e, "#experience")}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.nav>
  );
}
