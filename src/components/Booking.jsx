import React, { useState, useEffect } from 'react';

const Booking = ({ doctors, bookings, saveBooking, deleteBooking, showModal, selectedDoctor, setSelectedDoctor }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    doctor: '',
    date: '',
    time: '',
    phone: '',
    note: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (selectedDoctor) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(prev => ({ ...prev, doctor: selectedDoctor }));
      setSelectedDoctor(''); // Reset after setting
    }
  }, [selectedDoctor, setSelectedDoctor]);

  const times = [];
  for (let h = 9; h <= 17; h++) {
    times.push((h < 10 ? '0' + h : h) + ':00');
    times.push((h < 10 ? '0' + h : h) + ':30');
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, doctor, date, time } = formData;
    if (!fullName || !email || !doctor || !date || !time) {
      setMessage('Please fill required fields');
      setTimeout(() => setMessage(''), 3000);
      return;
    }
    saveBooking(formData);
    setMessage('Booking confirmed! Saved locally.');
    setFormData({
      fullName: '',
      email: '',
      doctor: '',
      date: '',
      time: '',
      phone: '',
      note: ''
    });
    setTimeout(() => setMessage(''), 3000);
  };

  const handleViewBooking = (booking) => {
    showModal({ type: 'booking', booking });
  };

  const clearAllBookings = () => {
    if (window.confirm('Clear all bookings?')) {
      localStorage.removeItem('medicore_demo_bookings_v1');
      window.location.reload();
    }
  };

  return (
    <section id="booking" className="bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="container grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-display font-bold">Book an Appointment</h2>
          <p className="text-gray-500 mt-2">
            Choose doctor, date and time. This demo saves bookings in your browser (localStorage).
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-white p-6 rounded-xl card-shadow">
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                name="fullName"
                type="text"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select doctor</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} — {doctor.spec}
                  </option>
                ))}
              </select>
              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select time</option>
                {times.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
              <input
                name="phone"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <textarea
              name="note"
              rows="3"
              placeholder="Notes (optional)"
              value={formData.note}
              onChange={handleChange}
              className="form-textarea"
            />

            <div className="flex items-center gap-3">
              <button type="submit" className="btn btn-primary">
                Confirm booking
              </button>
              <button type="button" onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })} className="btn btn-outline">
                View bookings
              </button>
            </div>

            {message && <div className="text-sm text-green-600 mt-2">{message}</div>}
          </form>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Clinic Location</h3>
          <div className="mt-4 rounded-xl overflow-hidden card-shadow">
            <iframe
              className="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.9554815747!2d69.1392813!3d41.2994958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3b4f61f24d%3A0x68ef6baf0b1d4f5f!2sTashkent!5e0!3m2!1sen!2suz!4v1691745887640!5m2!1sen!2suz"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

          <div className="mt-6 bg-white p-4 rounded-xl card-shadow">
            <h4 className="font-semibold">Upcoming bookings (local)</h4>
            <ul className="mt-3 space-y-2">
              {bookings.length === 0 ? (
                <li className="text-sm text-gray-500">No bookings yet.</li>
              ) : (
                bookings.map(booking => {
                  const doctor = doctors.find(d => d.id === booking.doctor);
                  return (
                    <li key={booking.id} className="flex items-start justify-between gap-3 p-2 bg-gray-50 rounded">
                      <div>
                        <div className="font-semibold">{booking.fullName}</div>
                        <div className="text-sm text-gray-500">
                          {booking.date} • {booking.time} • {doctor ? doctor.name : '—'}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleViewBooking(booking)} className="btn btn-outline text-sm px-3 py-1">
                          View
                        </button>
                        <button onClick={() => deleteBooking(booking.id)} className="btn text-sm px-3 py-1" style={{backgroundColor: '#ef4444', color: 'white'}}>
                          Delete
                        </button>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>
            {bookings.length > 0 && (
              <button onClick={clearAllBookings} className="btn mt-3" style={{backgroundColor: '#ef4444', color: 'white'}}>
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;