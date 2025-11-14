import React from 'react';

const Services = () => {
  const services = [
    { icon: '🩺', title: 'Primary Care', desc: 'Routine checkups, chronic disease management and family medicine.' },
    { icon: '💻', title: 'Telemedicine', desc: 'Secure video consultations with specialists — from home.' },
    { icon: '🧪', title: 'Lab & Diagnostics', desc: 'Fast lab results with online reporting and follow-up plans.' },
  ];

  return (
    <section id="services" className="container py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-display font-bold">Our Services</h2>
        <p className="text-gray-600 mt-2">Comprehensive care — from diagnostics to telemedicine and emergency services.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white rounded-xl card-shadow hover:translate-y-[-8px] transition">
            <div className="text-3xl">{service.icon}</div>
            <h3 className="mt-4 font-semibold">{service.title}</h3>
            <p className="text-gray-500 mt-2">{service.desc}</p>
            <a className="mt-4 inline-block text-primary font-medium" href="#">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;