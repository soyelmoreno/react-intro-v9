// basically stolen from the React docs
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // Here we create a div programmatically and store a reference to it using useRef
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
    elRef.current.className = "refDiv";
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <div className="portalDiv">{children}</div>,
    elRef.current,
  );
};

// eslint-disable-next-line no-unused-vars
const ModalIntoPreExistingElement = ({ children }) => {
  // Here we rely on a div that exists in our markup in index.html
  const modalRoot = document.getElementById("modal");
  return createPortal(<div className="portalDiv">{children}</div>, modalRoot);
};

export default Modal;
