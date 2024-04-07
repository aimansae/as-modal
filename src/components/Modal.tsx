import { forwardRef, ReactNode, useEffect, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import DarkOverlay from './DarkOverlay';
import Portal from './Portal';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  continueText: string;
  cancelText: string;
  title: string;
};

const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const { onClose, continueText, cancelText, title, children } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node) && onClose) {
        console.log('closing modal');
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <Portal>
      <section data-testid="modal">
        <DarkOverlay onClose={onClose} />
        <div
          ref={ref}
          className="fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 text-nowrap rounded bg-white p-4 shadow-lg sm:p-6 md:w-[650px]">
          <header className="flex items-center justify-between gap-4">
            <h2 className="text-base font-bold sm:text-xl">{title}</h2>
            <button className="font-bold" onClick={onClose}>
              <IoMdClose className="border border-transparent text-2xl transition-transform duration-300 hover:scale-105 hover:border-gray-300 sm:text-3xl" />
            </button>
          </header>
          {children}
          <footer className="flex justify-end">
            <button
              className="mr-2 rounded bg-green-300 px-4 py-2 font-bold text-white hover:bg-green-500"
              onClick={onClose}>
              {continueText}
            </button>
            <button
              className="rounded bg-red-300 px-4 py-2 font-bold text-white hover:bg-red-500"
              onClick={onClose}>
              {cancelText}
            </button>
          </footer>
        </div>
      </section>
    </Portal>
  );
});

export default Modal;
