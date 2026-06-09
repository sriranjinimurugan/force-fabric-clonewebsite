import { useRef, useEffect, useState } from "react";
import "./RecentProjects.css";

import AOS from "aos";
import "aos/dist/aos.css";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";

function RecentProjects() {
  const sliderRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      image: project1,
      title: "Cloud Cybersecurity Audit",
      description: "Cloud security assessment and cybersecurity implementation."
    },
    {
      image: project2,
      title: "GDPR Compliance",
      description: "GDPR compliance and privacy implementation for businesses."
    },
    {
      image: project3,
      title: "Secured WordPress",
      description: "WordPress security optimization and protection services."
    },
    {
      image: project4,
      title: "Client Case",
      description: "SaaS platform development and deployment solutions."
    },
    {
      image: project5,
      title: "Blockchain Audit",
      description: "Blockchain auditing and smart contract security review."
    },
    {
      image: project6,
      title: "Azure DevOps Training",
      description: "Azure DevOps implementation and training services."
    },
    {
      image: project7,
      title: "FinOps Audit",
      description: "Cloud cost optimization and FinOps governance support."
    }
  ];

  const nextSlide = () => {
    sliderRef.current?.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  };

  const prevSlide = () => {
    sliderRef.current?.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  };

  return (
    <section className="projects-section">
      <h2 className="section-title" data-aos="fade-up">
        Recent Projects
      </h2>

      <p
        className="section-subtitle"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Each project is a unique challenge. Here are some of our recent achievements.
      </p>

      <div className="projects-wrapper">
        <button
          className="arrow left-arrow"
          onClick={prevSlide}
        >
          ❮
        </button>

        <div
          className="projects-slider"
          ref={sliderRef}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${
                activeCard === index ? "active" : ""
              }`}
              onClick={() => setActiveCard(index)}
            >
              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="arrow right-arrow"
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default RecentProjects;