import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const iotakingdomsTextElement = screen.getByText(/iotakingdoms/i);
  expect(iotakingdomsTextElement).toBeInTheDocument();
  const loginLinkElement = screen.getByText(/Login/i);
  expect(loginLinkElement).toBeInTheDocument();
});
