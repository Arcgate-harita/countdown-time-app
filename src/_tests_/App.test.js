import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import App from '../../src/App';

test('renders components', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();

  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();

  const timerElement = screen.getByTestId('timer');
  expect(timerElement).toBeInTheDocument();


  const aboutElement = screen.getByTestId('about');
  expect(aboutElement).toBeInTheDocument();

});

test('renders About component on the About route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
});
