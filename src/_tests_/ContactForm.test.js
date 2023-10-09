import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../../src/ContactForm';

test('suite', async () => {
  const { debug } = render(
    <ContactForm />
  );
  debug();

  const nameInput = screen.getByPlaceholderText('Name*');
  const emailInput = screen.getByPlaceholderText('Email* (e.g., abc@gmail.com)');
  const numberInput = screen.getByPlaceholderText('Phone Number* (e.g., +91XXXXXXXXXX)');


  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  fireEvent.change(numberInput, { target: { value: '+911234567890' } });

  const submitButton = screen.getByText('Send');
  fireEvent.click(submitButton);

  await waitFor(() => {
    const successMessage = screen.getByText('Thank you for your message! Your information has been saved.');
    expect(successMessage).toBeInTheDocument();
  });

});

test('Submit form with invalid inputs', async () => {
  render(<ContactForm />);


  const submitButton = screen.getByText('Send');
  fireEvent.click(submitButton);


  const nameError = await screen.findByText('Please enter a valid name with letters and spaces only.');
  const emailError = await screen.findByText('Please enter a valid email address.');
  const numberError = await screen.findByText('Please enter a valid phone number in the format +91XXXXXXXXXX.');

  expect(nameError).toBeInTheDocument();
  expect(emailError).toBeInTheDocument();
  expect(numberError).toBeInTheDocument();
});
