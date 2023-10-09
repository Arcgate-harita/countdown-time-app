import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!name.match(/^[A-Za-z\s]+$/)) {
      errors.nameError = 'Please enter a valid name with letters and spaces only.';
    }

    if (!email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
      errors.emailError = 'Please enter a valid email address.';
    }

    if (!number.match(/^\+91[0-9]{10}$/)) {
      errors.numberError = 'Please enter a valid phone number in the format +91XXXXXXXXXX.';
    }

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    } else {
      setNameError(errors.nameError || '');
      setEmailError(errors.emailError || '');
      setNumberError(errors.numberError || '');
    }
  };

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [numberError, setNumberError] = useState('');

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'name':
        setNameError('');
        break;
      case 'email':
        setEmailError('');
        break;
      case 'number':
        setNumberError('');
        break;
      default:
        break;
    }

    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="contact-popup" >

      <div className="contact-popup-content" data-testid="contact-form">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Contact Us</h2>
        {isSubmitted ? (
          <div className="popup-message">
            Thank you for your message! Your information has been saved.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="name-input"
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
              {nameError && <p className="error-text">{nameError}</p>}
            </div>
            <div className="form-group">
              <input
                className="email-input"
                type="text"
                placeholder="Email* (e.g., abc@gmail.com)"
                value={email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              {emailError && <p className="error-text">{emailError}</p>}
            </div>
            <div className="form-group">
              <input
                className="number-input"
                type="text"
                placeholder="Phone Number* (e.g., +91XXXXXXXXXX)"
                value={number}
                onChange={(e) => handleInputChange('number', e.target.value)}
              />
              {numberError && <p className="error-text">{numberError}</p>}
            </div>
            <div className="form-group">
              <button className="send-button" type="submit">
                Send
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
