import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Doctors from './components/Doctors.jsx';
import Testimonials from './components/Testimonials.jsx';
import Booking from './components/Booking.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';
import { DOCTORS } from './data';

console.log('App component loaded');

function App() {
  const [modalContent, setModalContent] = useState(null);
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('medicore_demo_bookings_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const saveBooking = (booking) => {
    const newBooking = { ...booking, id: 'b' + Date.now() };
    const updated = [...bookings, newBooking];
    setBookings(updated);
    localStorage.setItem('medicore_demo_bookings_v1', JSON.stringify(updated));
  };

  const deleteBooking = (id) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    localStorage.setItem('medicore_demo_bookings_v1', JSON.stringify(updated));
  };

  const showModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <div className="bg-soft text-gray-800 antialiased">
      <Header />
      <main className="pt-24">
        <Hero showModal={showModal} />
        <Services />
        <Doctors doctors={DOCTORS} showModal={showModal} />
        <Testimonials />
        <Booking doctors={DOCTORS} bookings={bookings} saveBooking={saveBooking} deleteBooking={deleteBooking} showModal={showModal} selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor} />
        <Footer />
      </main>
      {modalContent && <Modal content={modalContent} onClose={closeModal} setSelectedDoctor={setSelectedDoctor} />}
    </div>
  );
}

export default App;
