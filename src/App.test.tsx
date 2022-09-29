import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders page', () => {
  render(<App />);
  const body = screen.getByText(/Main body/i);
  expect(body).toBeInTheDocument();
});
