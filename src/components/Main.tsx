import { useState } from 'react';
import Modal from './Modal';

const Main = () => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(!openModal);
    console.log('Modal clicked');
  };
  return (
    <div className="my-2 flex flex-col items-center justify-center gap-2">
      <h1 className="text-xl font-bold">Click the Button to see the Modal</h1>
      <button
        onClick={showModal}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        Open Modal
      </button>
      {openModal && <Modal onClose={showModal} />}
    </div>
  );
};

export default Main;
