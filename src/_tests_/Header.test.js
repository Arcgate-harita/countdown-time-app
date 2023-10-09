import React from 'react';
import { render, screen,waitFor, fireEvent } from '@testing-library/react';
import Header from '../../src/Header';
import '@testing-library/jest-dom';

test('suite', async () => {
    const { debug } = render(
        <Header />
    );
    debug();

    await waitFor(() => {
        const logoElement = screen.getByAltText('Logo');
        expect(logoElement).toBeInTheDocument();
      });

    const toggleButton = screen.getByTestId('toggle-button');
    fireEvent.click(toggleButton);

    const scrollIntoViewMock = jest.fn();
    const aboutSection = document.createElement('div');
    aboutSection.id = 'about';
    aboutSection.scrollIntoView = scrollIntoViewMock;
    document.body.appendChild(aboutSection);

    const aboutLink = screen.getByText('About');
    fireEvent.click(aboutLink);


    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });

 
});

test('Open the Contact form when "Contact" is clicked', () => {
    render(<Header />);

    const contactLink = screen.getByText('Contact');
    fireEvent.click(contactLink);
 
    const contactForm = screen.getByTestId('contact-form');
    expect(contactForm).toBeInTheDocument();
    
  });
