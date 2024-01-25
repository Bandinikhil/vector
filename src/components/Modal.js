import React from "react";

import NegotitationDetails from "./NegotitionDetails";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-slate-200 p-4 rounded-lg z-10 w-70vw h-full overflow-y-auto">
            <button
              className="absolute top-5 right-8 text-gray-600 z-[100]"
              onClick={onClose}
            >
              <svg
                class="w-[47px] h-[47px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div className="w-full  flex flex-col items-center justify-center px-4">
              <NegotitationDetails />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
