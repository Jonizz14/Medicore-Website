import React, { useState, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';

const Doctors = ({ doctors, showModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpec, setFilterSpec] = useState('');

  const filteredDoctors = useMemo(() => {
    let filtered = doctors;
    if (filterSpec) {
      filtered = filtered.filter(d => d.spec === filterSpec);
    }
    if (searchTerm) {
      filtered = filtered.filter(d =>
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.spec.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [searchTerm, filterSpec, doctors]);

  useEffect(() => {
    gsap.from('.doctor-card', { stagger: 0.06, y: 12, opacity: 0, duration: 0.6, delay: 0.2 });
  }, [filteredDoctors]);

  const specialties = [...new Set(doctors.map(d => d.spec))];

  const handleView = (doctor) => {
    showModal({ type: 'doctor', doctor });
  };

  const handleBook = (doctorId) => {
    const doctor = doctors.find(d => d.id === doctorId);
    showModal({ type: 'doctor', doctor, action: 'book' });
  };

  return (
    <section id="doctors" className="bg-white py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-display font-bold">Meet Our Doctors</h2>
            <p className="text-gray-500">Carefully selected specialists with top qualifications.</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search doctor or specialty"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
            />
            <select
              value={filterSpec}
              onChange={(e) => setFilterSpec(e.target.value)}
              className="form-select"
            >
              <option value="">All specialties</option>
              {specialties.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="doctor-card p-6 rounded-xl card-shadow bg-white">
              <div className="flex items-start gap-4">
                <img src={doctor.img} alt={doctor.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{doctor.name}</div>
                      <div className="text-sm text-gray-500">{doctor.spec}</div>
                    </div>
                    <button onClick={() => handleView(doctor)} className="btn btn-primary text-sm px-3 py-2">
                      View
                    </button>
                  </div>
                  <p className="mt-3 text-gray-600 text-sm">
                    Patient-centered care, modern diagnostics & proven methods.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <button onClick={() => handleBook(doctor.id)} className="btn btn-outline text-sm px-3 py-2">
                      Book
                    </button>
                    <button onClick={() => alert('Messaging demo — integrate real chat or email API')} className="btn btn-secondary text-sm px-3 py-2">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;