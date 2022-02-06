import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

declare const window: Window & typeof globalThis & {
  env: any
};

test('renders learn react link', () => {
  window.env = {};
  window.env.REACT_APP_ENVIRONMENT = 'LOCAL';
  render(<App />);
  const iotakingdomsTextElement = screen.getByText(/iotakingdoms/i);
  expect(iotakingdomsTextElement).toBeInTheDocument();
  const loginLinkElement = screen.getByText(/Login/i);
  expect(loginLinkElement).toBeInTheDocument();
});
