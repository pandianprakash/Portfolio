import React, { useState } from 'react';
import './Contact.css'; // Importing the CSS for styling

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', { name, email, message });
    alert('Thank you for your message!');
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon-box">
            <i class='bx bx-phone bx-rotate-90' ></i>
            </div>
            <div>
              <h3>Phone</h3>
              <p>+91 7826889248</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon-box">
            <i className='bx bx-envelope'></i>
            </div>
            <div>
              <h3>Email</h3>
              <p>pandianprakash317@gamil.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon-box">
            <i class='bx bx-map'></i>           
            </div>
            <div>
              <h3>Address</h3>
              <p>Ambatur,Chennai.</p>
            </div>
          </div>
        </div>

       
        <div className="form-section">
          <h3>Contact <span>Me</span></h3>
          <p>If you have any questions, feel free to reach out to me!</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
              className="input-field"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
              className="input-field"
            />
            <textarea
              placeholder="Write your message here..."
              value={message}
              onChange={handleMessageChange}
              rows="5"
              className="message-box"
            />
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
