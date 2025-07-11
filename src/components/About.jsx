import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about container section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p>
          I'm Manoj Mandal, a Cybersecurity Analyst and Penetration Tester from Kolkata, West Bengal. I specialize in threat detection, incident response, and vulnerability assessment.
        </p>
        <p>
          Certified in Google Cybersecurity and skilled with tools like Wireshark, Nmap, Burp Suite, and Splunk, I bring hands-on experience in ethical hacking and network monitoring.
        </p>
        <p>
          I've worked on projects like a Cybersecurity Incident Response Simulator and VAPT on DVWA, following OWASP and CVSS standards.
        </p>
        <p>
          Currently pursuing B.Tech in CSE at Sister Nivedita University, I’m fluent in English, Bengali, and Hindi, and constantly expanding my knowledge through Coursera and practical training.
        </p>
      </div>
    </section>
  );
};

export default About;
