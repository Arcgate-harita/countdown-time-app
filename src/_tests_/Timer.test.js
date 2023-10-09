import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timer from "../../src/Timer";

test('suite', async () => {
  const { debug } = render(
    <Timer />
  );
  debug();
});


test('renders Timer component with expected elements', async () => {

  const { getByText } = render(<Timer name="John" day={new Date().getDate()} month={new Date().getMonth() + 1} />);
  expect(screen.getByText('Set Countdown Time')).toBeInTheDocument();
  expect(screen.getByText('Subscribe')).toBeInTheDocument();
});

it('opens and closes the CountdownModal when "Set Countdown Time" is clicked', () => {
  render(<Timer name="John" day={30} month={11} />);

  fireEvent.click(screen.getByText('Set Countdown Time'));
  expect(screen.getByText('Set Countdown Date')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Cancel'));
  expect(screen.queryByText('Set Countdown Date')).toBeInTheDocument();
});

it('subscribes to the newsletter when a valid email is entered', async () => {
  render(<Timer name="John" day={30} month={11} />);

  fireEvent.change(screen.getByPlaceholderText('Enter your email'), {
    target: { value: 'test@example.com' },
  });

  fireEvent.click(screen.getByText('Subscribe'));
  await screen.findByText('Thank you for subscribing, test@example.com!');
  expect(screen.getByText('Thank you for subscribing, test@example.com!')).toBeInTheDocument();
});

it('displays an error message for an invalid email', () => {
  render(<Timer name="John" day={30} month={11} />);

  fireEvent.change(screen.getByPlaceholderText('Enter your email'), {
    target: { value: 'invalid-email' },
  });

  fireEvent.click(screen.getByText('Subscribe'));
  expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
});
