import React from 'react';
import { render, screen } from '@testing-library/react';
import Health from './Health';

test('renders learn react link', () => {
  render(<Health />);
  const linkElement = screen.getByText(/OK/i);
  expect(linkElement).toBeInTheDocument();
});
