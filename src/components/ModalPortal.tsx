import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: ReactNode;
};

const ModalPortal = ({ children }: PortalProps) => {
  const portalRoot = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(portalRoot);
    return () => {
      document.body.removeChild(portalRoot);
    };
  }, [portalRoot]);

  return ReactDOM.createPortal(children, portalRoot);
};

export default ModalPortal;
