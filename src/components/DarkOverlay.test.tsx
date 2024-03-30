import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DarkOverlay from './DarkOverlay';

describe('DarkOverlay renders', () => {
  test('Homepage is darkened upon modal open', () => {
    render(<DarkOverlay />);

    expect(screen.getByTestId('dark-overlay')).toBeInTheDocument();
  });
});
