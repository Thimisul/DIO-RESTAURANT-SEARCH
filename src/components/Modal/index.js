import React, { useEffect } from 'react';

import Portal from './Portal';

import { OverLay, Dialog } from './styles';

const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) onClose();
    }

    window.addEventListener('keydown', onEsc);

    return () => {
      // remove escuta de tecla
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  if (!open) return null;

  function onOverlayClick() {
    onClose();
  }

  function onDialogClick(e) {
    e.stopPropagation();
  }

  return (
    <Portal>
      <OverLay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </OverLay>
    </Portal>
  );
};

export default Modal;
