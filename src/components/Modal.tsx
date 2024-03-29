import { forwardRef, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import DarkOverlay from './DarkOverlay';
import ModalPortal from './ModalPortal';

type ModalProps = {
  onClose: () => void;
  continueText: string;
  cancelText: string;
  title: string;
  bodyText: string;
};

const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const { onClose, continueText, bodyText, cancelText, title } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose;
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <ModalPortal>
      <section data-testid="modal">
        <DarkOverlay />
        <div
          ref={ref}
          className="fixed left-1/2 top-1/2 flex w-[350px] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 text-nowrap rounded bg-white p-4 shadow-lg sm:w-[500px] sm:p-6 md:w-[650px]">
          <header className="flex items-center justify-between gap-4">
            <h2 className="text-base font-bold sm:text-xl ">{title}</h2>
            <button className="font-bold" onClick={onClose}>
              <AiOutlineClose className="border border-transparent text-2xl transition-transform duration-300 hover:scale-105 hover:border-gray-300 sm:text-3xl" />
            </button>
          </header>
          <div className="mb-4">{bodyText}</div>
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
    </ModalPortal>
  );
});

export default Modal;
