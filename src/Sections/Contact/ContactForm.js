import React, { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Додайте код для обробки форми тут
    console.log('Form submitted:');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="formName"
          label="Name"
          className="mb-2 form__label"
        >
          <Form.Control 
            className="form__control"
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder='Name'
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="formEmail"
          label="Email"
          className="mb-2 form__label"
        >
          <Form.Control 
            className="form__control"
            type="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Email'
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="formMessage"
          label="Message"
          className="mb-2 form__label"
        >
          <Form.Control 
            className="form__control"
            as="textarea"
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder='Message'
          />
        </FloatingLabel>
        <div className="form__button">
          <Button className="button" type="submit">SEND</Button> 
        </div>
      </Form>

  );
};

export default ContactForm;
