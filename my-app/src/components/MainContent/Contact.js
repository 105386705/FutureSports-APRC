import React from 'react';

const Contact = () => (
  <div className="contact-content">
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form id="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
        </div>
        <div className="form-group">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
    <div className="contact-text">
      <h2>APRC</h2>
      <p>Empowering local runners towards achieving personal and professional excellence, Albert Park Running Club.</p>
    </div>
  </div>
);

export default Contact;
