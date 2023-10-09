import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from "../../src/Footer";

describe('Footer component', () => {
  it('renders the footer with default values', () => {
    render(<Footer />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText(/Your Company/)).toBeInTheDocument();
  });

  it('scrolls to top when "Home" is clicked', () => {
    render(<Footer />);
    const scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;
    fireEvent.click(screen.getByText('Home'));
    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('scrolls to about when "About" is clicked', () => {
    render(<Footer />);
    document.getElementById = jest.fn(() => ({ scrollIntoView: jest.fn() }));
    fireEvent.click(screen.getByText('About'));
    expect(document.getElementById).toHaveBeenCalledWith('about');
  });

  it('opens the contact form when "Contact" is clicked', () => {
    render(<Footer />);

    fireEvent.click(screen.getByText('Contact'));
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });
});
