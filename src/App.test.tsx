import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveTextContent(/number guesser$/i)
});
