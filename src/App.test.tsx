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
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
