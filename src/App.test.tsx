import { render, screen } from '@testing-library/react';
import App from './App';

test('h contains a text', () => {
  render(<App />);
  const textElement = screen.getByRole('heading', { level: 1 });
  expect(textElement.textContent).toBe('Hello');
});
