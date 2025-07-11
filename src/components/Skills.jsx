import React from 'react';
import './Skills.css';

const skills = [
  'Threat Detection & Analysis',
  'Penetration Testing & Ethical Hacking',
  'Log Analysis & Monitoring',
  'Packet Analysis with Wireshark',
  'Network Security & Firewalls',
  'Python Scripting',
  'MySQL',
  'Burp Suite',
  'Nmap',
  'Metasploit',
  'Hydra',
  'John the Ripper',
  'SQLMap',
  'OWASP ZAP',
  'XSS Testing',
  'CVSS Scoring',
];

const Skills = () => {
  return (
    <section id="skills" className="skills container section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
