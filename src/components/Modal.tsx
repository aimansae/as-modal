import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

type ModalProps = {
  onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      console.log('Mouse Clicked outside');

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

  const getPortal = document.getElementById('portal');
  if (!getPortal) return null;

  return ReactDOM.createPortal(
    <section data-testid='modal'>
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* Modal */}
      <aside
        ref={modalRef}
        className="fixed left-1/2 top-1/2 flex w-[350px] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 text-nowrap rounded bg-white p-4 shadow-lg sm:w-[500px] sm:p-6 md:w-[650px]">
        <header className="flex items-center justify-between gap-4">
          <h2 className="text-base font-bold sm:text-xl ">Are you sure you want to continue?</h2>
          <button className="font-bold" onClick={onClose}>
            <AiOutlineClose className="border border-transparent text-2xl transition-transform duration-300 hover:scale-105 hover:border-gray-300 sm:text-3xl" />
          </button>{' '}
        </header>
        <div className="mb-4">
          <p className="text-base">This is a modal made with React portals</p>
        </div>
        <footer className="flex justify-end">
          <button
            className="mr-2 rounded bg-green-300 px-4 py-2 font-bold text-white hover:bg-green-500"
            onClick={onClose}>
            Continue
          </button>
          <button
            className="rounded bg-red-300 px-4 py-2 font-bold text-white hover:bg-red-500"
            onClick={onClose}>
            Cancel
          </button>
        </footer>
      </aside>
    </section>,
    getPortal
  );
};

export default Modal;
