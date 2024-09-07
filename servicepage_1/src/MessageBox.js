import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ isFormVisible }) => isFormVisible ? 'hidden' : 'auto'};
  }
`;

const BlurredBackground = styled.div`
  ${({ isFormVisible }) => isFormVisible && `
    filter: blur(5px);
    pointer-events: none;
  `}
`;

const ConnectButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 150px;
  height: 50px;
  background-color: #C46D5E;
  color: #2D2D34;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 1001; /* Ensure form is above the blur effect */
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MessageBox = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_1', // Replace with your EmailJS Service ID
      'template_zimfu66', // Replace with your EmailJS Template ID
      formState,
      '8KbONfB-jPH6a7j04' // Replace with your EmailJS User ID
    )
    .then((response) => {
      alert('Message sent successfully!');
      setFormState({ name: '', email: '', message: '' }); // Reset the form
      setIsFormVisible(false); // Hide the form after submission
    })
    .catch((error) => {
      alert('Failed to send the message, please try again later.');
    });
  };

  return (
    <div>
      <GlobalStyle isFormVisible={isFormVisible} />
      <BlurredBackground isFormVisible={isFormVisible}>
        {/* Your existing content goes here */}
      </BlurredBackground>

      {!isFormVisible && (
        <ConnectButton onClick={() => setIsFormVisible(true)}>
          Connect
        </ConnectButton>
      )}

      {isFormVisible && (
        <Overlay>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formState.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formState.message}
              onChange={handleChange}
              required
            />
            <Button type="submit">Send Message</Button>
          </Form>
        </Overlay>
      )}
    </div>
  );
};

export default MessageBox;
