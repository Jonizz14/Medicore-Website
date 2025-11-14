import React, { useEffect } from 'react';

const Modal = ({ content, onClose, setSelectedDoctor }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!content) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const renderContent = () => {
    if (content.type === 'doctor') {
      const { doctor, action } = content;
      return (
        <div className="flex gap-4 items-center">
          <img src={doctor.img} alt="" className="w-28 h-28 rounded-lg object-cover" />
          <div>
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <div className="text-sm text-gray-500">{doctor.spec}</div>
            <p className="mt-3 text-gray-600">
              Experienced specialist. Book a session or see available times.
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => {
                  onClose();
                  if (action === 'book') {
                    setSelectedDoctor(doctor.id);
                    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-4 py-2 bg-primary text-white rounded"
              >
                Book
              </button>
              <button onClick={onClose} className="px-4 py-2 border rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      );
    } else if (content.type === 'booking') {
      const { booking } = content;
      return (
        <div>
          <h3 className="text-lg font-semibold mb-2">Booking</h3>
          <div><b>Name:</b> {booking.fullName}</div>
          <div><b>Email:</b> {booking.email}</div>
          <div><b>Doctor:</b> {booking.doctor}</div>
          <div><b>Date / Time:</b> {booking.date} {booking.time}</div>
          <div><b>Note:</b> {booking.note || '-'}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={handleOverlayClick}>
      <div className="bg-white rounded-xl w-full max-w-lg p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500">✕</button>
        {renderContent()}
      </div>
    </div>
  );
};

export default Modal;