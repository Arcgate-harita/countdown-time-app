import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountdownModal from '../CountdownModal';

test('Renders CountdownModal with default values', async () => {
  const { getByText, queryByText } = render(
    <CountdownModal isOpen={false} onClose={() => { }} onSetCountdown={() => { }} selectedDateProp={null} />
  );

  await waitFor(() => {
    expect(getByText('Set Countdown Date')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
    expect(queryByText('2023-12-31')).not.toBeInTheDocument();
  });

});


test('Renders CountdownModal with default values', () => {
  const { getByText, queryByText } = render(
    <CountdownModal isOpen={false} onClose={() => { }} onSetCountdown={() => { }} selectedDateProp={null} />
  );

  expect(getByText('Set Countdown Date')).toBeInTheDocument();
  expect(getByText('Cancel')).toBeInTheDocument();
  expect(queryByText('2023-12-31')).not.toBeInTheDocument();
});

test('Renders CountdownModal with default values', async () => {
  const { getByText, queryByText } = render(
    <CountdownModal isOpen={false} onClose={() => { }} onSetCountdown={() => { }} selectedDateProp={null} />
  );

  expect(getByText('Set Countdown Date')).toBeInTheDocument();
  expect(getByText('Cancel')).toBeInTheDocument();


  await waitFor(() => {
    expect(queryByText('2023-12-31')).not.toBeInTheDocument();
  });
});


test('Clicking "Set Countdown" button calls onSetCountdown and onClose', () => {
  const onSetCountdownMock = jest.fn();
  const onCloseMock = jest.fn();

  const { getByText } = render(
    <CountdownModal isOpen={true} onClose={onCloseMock} onSetCountdown={onSetCountdownMock} selectedDateProp={null} />
  );

  const setCountdownButton = getByText('Set Countdown');
  fireEvent.click(setCountdownButton);

  expect(onSetCountdownMock).toHaveBeenCalled();
  expect(onCloseMock).toHaveBeenCalled();
});
