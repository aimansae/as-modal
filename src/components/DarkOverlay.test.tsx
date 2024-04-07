import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DarkOverlay from './DarkOverlay';

describe('DarkOverlay renders', () => {
  test('Main success scenario', () => {
    const onCloseMock = jest.fn();

    render(<DarkOverlay onClose={onCloseMock} />);

    expect(screen.getByTestId('dark-overlay')).toBeInTheDocument();
  });
});
