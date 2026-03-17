import React from 'react';
import SectionTitle from "./SectionTitle";
// Import icons from the FontAwesome and SimpleIcons libraries
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';

function Contacts() {
  return (
    <section className="section" id="contacts">
      <SectionTitle eyebrow="Contacts" title="Questions? Reach at..." />

      {/* Modern Flex Grid Container */}
      <div className="contact-grid">
        
        {/* EMAIL CARD */}
        <a href="mailto:sut2300001@utdallas.edu" className="contact-card email-card">
          <SiMinutemailer className="contact-icon" />
          <div className="contact-text-group">
            <span className="contact-platform">Email</span>
            <span className="contact-link-text">sut2300001@utdallas.edu</span>
          </div>
        </a>

        {/* GITHUB CARD */}
        <a 
          href="https://github.com/sans-2186" 
          target="_blank" 
          rel="noreferrer" 
          className="contact-card github-card"
        >
          <FaGithub className="contact-icon" />
          <div className="contact-text-group">
            <span className="contact-platform">GitHub</span>
            <span className="contact-link-text">@sans-2186</span>
          </div>
        </a>

        {/* LINKEDIN CARD */}
        <a 
          href="https://www.linkedin.com/in/sanskriti-tiwari-ab300030b/" 
          target="_blank" 
          rel="noreferrer" 
          className="contact-card linkedin-card"
        >
          <FaLinkedinIn className="contact-icon" />
          <div className="contact-text-group">
            <span className="contact-platform">LinkedIn</span>
            <span className="contact-link-text">Sanskriti Tiwari</span>
          </div>
        </a>

      </div>
    </section>
  );
}

export default Contacts;