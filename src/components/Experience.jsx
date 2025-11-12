import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function PortfolioNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setExpanded(false);
    }
  };

  // Add scroll detection
  useEffect(() => {
    const handleScrollEffect = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const sections = [
        "#hero",
        "#about",
        "#skills",
        "#projects",
        "#experience",
        "#contact",
      ];
      for (let id of sections) {
        const section = document.querySelector(id);
        if (
          section &&
          scrollY >= section.offsetTop - 100 &&
          scrollY < section.offsetTop + section.offsetHeight - 100
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollEffect);
    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, []);

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
        className={`py-3 ${scrolled ? "navbar-scrolled shadow-sm" : "bg-white"}`}
        style={{ transition: "all 0.3s ease" }}
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
              {[
                { id: "#about", label: "About" },
                { id: "#skills", label: "Skills" },
                { id: "#projects", label: "Projects" },
                { id: "#experience", label: "Experience" },
                { id: "#contact", label: "Contact" },
              ].map((link) => (
                <Nav.Link
                  key={link.id}
                  href={link.id}
                  onClick={(e) => handleScroll(e, link.id)}
                  className={`nav-link-custom ${
                    activeSection === link.id ? "active" : ""
                  }`}
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.nav>
  );
}
