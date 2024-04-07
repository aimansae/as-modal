type OverlayProps = {
  onClose: () => void;
};

const DarkOverlay = ({ onClose }: OverlayProps) => {
  return (
    <div
      data-testid="dark-overlay"
      className="fixed inset-0 bg-black opacity-50"
      onClick={onClose}
    />
  );
};

export default DarkOverlay;
