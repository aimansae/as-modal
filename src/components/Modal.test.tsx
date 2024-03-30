import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';
import userEvent from '@testing-library/user-event';

describe('Modal', () => {
  const onCloseMock = jest.fn();

  const props = {
    onClose: onCloseMock,
    continueText: 'Continue',
    cancelText: 'Cancel',
    title: 'Test Modal',
    bodyText: 'Testing Modal content'
  };
  test('Modal renders', () => {
    render(<Modal {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.bodyText)).toBeInTheDocument();
    expect(screen.getByText(props.continueText)).toBeInTheDocument();
    expect(screen.getByText(props.cancelText)).toBeInTheDocument();
  });

  test('modal closes', async () => {
    render(<Modal {...props} />);
    const continueButton = screen.getByRole('button', { name: /cancel/i });
    await userEvent.click(continueButton);
    await userEvent.click(document.body);
    await userEvent.type(document.body, 'esc');

    expect(props.onClose).toHaveBeenCalledTimes(1);
  });
});
