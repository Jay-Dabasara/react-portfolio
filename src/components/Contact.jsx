import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>
        Interested in working together or have any questions? Feel free to reach out!
      </p>
      <div className="contact-links">
        <a className="contact-link" href="mailto:jayliftt@gmail.com">📧 Email</a>
        <a className="contact-link" href="https://www.linkedin.com/in/dabasarajay//" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
        <a className="contact-link" href="https://github.com/jayliftt" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
        <a className="contact-link" href="https://www.instagram.com/_jayliftss_/" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
      </div>
    </section>
  );
};

export default Contact;
