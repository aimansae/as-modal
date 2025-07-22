import { useRef, useState } from 'react';
import Modal from './Modal';

const Main = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="my-2 h-screen flex flex-col items-center justify-center gap-2">
      <h1 className="text-xl font-bold">Click to see the Modal</h1>
      <button
        onClick={toggleModal}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        Open Modal
      </button>

      {openModal && (
        <>
          <Modal
            onClose={handleModalClose}
            ref={modalRef}
            title="Are you sure you want to continue"
            cancelText="Cancel"
            continueText="Continue">
            <div className="mb-4">
              <p>This is a Modal created using React</p>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Main;
