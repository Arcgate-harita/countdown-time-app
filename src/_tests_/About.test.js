import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../About';

test('suite', async () => {
    const { debug } = render(
        <About />
    );
    debug();

    const headingElement = screen.getByText('HELLO EVERYONE !');
    expect(headingElement).toBeInTheDocument();

    const paragraphElement = screen.getByText(/The Self Made Platform Is Moving Into Final Developments And Getting Ready To Finally Launch Internationally/i);
    expect(paragraphElement).toBeInTheDocument();

});
