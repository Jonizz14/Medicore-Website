import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = ({ showModal }) => {
  useEffect(() => {
    gsap.from('.hero-title', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' });
    gsap.from('.hero-lead', { y: 10, opacity: 0, duration: 0.9, delay: 0.1 });
    gsap.from('.hero-btn', { scale: 0.98, opacity: 0, duration: 0.8, delay: 0.2 });
  }, []);

  const handleQuickBook = () => {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDetails = () => {
    showModal({
      type: 'doctor',
      doctor: { id: 'd1', name: 'Dr. Aisha Khan', spec: 'Pediatrics', img: '/images/doc1.jpg' }
    });
  };

  return (
    <section id="home" className="relative hero-wave overflow-hidden">
      <div className="container py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="hero-title text-4xl font-display font-bold leading-tight text-deep">
            Healthcare reimagined — <span className="text-primary">fast, safe</span> & human
          </h1>
          <p className="hero-lead text-gray-600 max-w-xl">
            Online booking, telemedicine and secure patient records. Scalable, accessible and beautiful product for modern clinics.
          </p>

          <div className="flex flex-wrap gap-3">
            <button onClick={handleQuickBook} className="hero-btn inline-flex items-center gap-3 px-5 py-3 bg-primary text-white rounded-lg font-semibold shadow-lg hover-scale-102">
              Book appointment
              <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-85">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5V7l6 4.5-6 5z" />
              </svg>
            </button>
            <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-3 px-5 py-3 border rounded-lg bg-white font-medium hover:bg-white">
              Our services
            </button>
          </div>

          <div className="mt-6 flex gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white card-shadow">
                <img width="35px" src="/images/videocall.png" alt="" />
              </div>
              <div>
                <div className="font-semibold">Telemedicine</div>
                <div className="text-sm text-gray-500">Video calls with specialists</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white card-shadow">
                <img width="30px" src="/images/clock.png" alt="" />
              </div>
              <div>
                <div className="font-semibold">Smart Scheduling</div>
                <div className="text-sm text-gray-500">Auto-available times & reminders</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden card-shadow bg-white">
            <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop" alt="clinic" className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-500 text-sm">Next available</div>
                  <div className="text-lg font-semibold">Today — 16:30</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Doctor</div>
                  <div className="font-semibold">Dr. Aisha Khan</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button onClick={handleQuickBook} className="btn btn-secondary py-3 px-4 hover-scale-102">
                  Quick Book
                </button>
                <button onClick={handleDetails} className="py-3 px-4 border rounded-lg hover:bg-gray-50">
                  View details
                </button>
              </div>
            </div>
          </div>

          <div className="absolute -top-10 right-5 bg-white rounded-xl p-4 w-56 card-shadow flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Patients</div>
              <div className="font-semibold text-lg">3,204</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Doctors</div>
              <div className="font-semibold text-lg">28</div>
            </div>
          </div>
        </div>
      </div>

      <svg className="w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path fill="#f6fbfb" d="M0,96L48,85.3C96,75,192,53,288,37.3C384,21,480,11,576,10.7C672,11,768,21,864,53.3C960,85,1056,139,1152,144C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  );
};

export default Hero;