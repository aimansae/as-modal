import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';
import Main from './Main';

describe('Main renders', () => {
  test('h1 renders text', () => {
    render(<Main />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument;
  });

  test('Button to open modal Renders', () => {
    render(<Main />);
    
    expect(screen.getByRole('button', { name: /open modal/i })).toBeInTheDocument();
  });

  test('Open Modal button works', async () => {
    render(<Main />);
    const modalButton = screen.getByRole('button', { name: /open modal/i });
    await userEvent.click(modalButton);
    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });
  });
});
