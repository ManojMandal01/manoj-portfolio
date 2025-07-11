import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Cybersecurity Incident Response Simulation Tool',
    description:
      'A simulation tool that helps organizations detect and manage incidents like malware, phishing, and insider threats. Includes real-time alerts, incident tracking, and auto-reporting via dashboard.',
    tags: ['Python', 'Wireshark', 'MongoDB', 'OWASP'],
    githubLink: 'https://github.com/ManojMandal01', // replace with direct repo if available
  },
  {
    title: 'VAPT on DVWA',
    description:
      'Performed complete Vulnerability Assessment and Penetration Testing (VAPT) on DVWA using tools like Burp Suite and SQLMap. Report includes vulnerabilities, CVSS scores, and mitigation steps.',
    tags: ['Burp Suite', 'Nmap', 'SQLMap', 'OWASP ZAP'],
    githubLink: 'https://github.com/ManojMandal01', // replace with direct repo if available
  },
  {
    title: 'Web Application Security Testing – TestPHP',
    description:
      'Manually and automatically tested a vulnerable PHP site for real-world attack vectors like XSS and insecure login. Followed OWASP Top 10 and used tools like Burp Suite for documentation.',
    tags: ['Burp Suite', 'OWASP', 'XSS', 'TestPHP.vulnweb.com'],
    githubLink: 'https://github.com/ManojMandal01', // replace with direct repo if available
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="project-buttons">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects container section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
