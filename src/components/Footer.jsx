import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-deep text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-xl">Medicore</h3>
          <p className="text-gray-200 mt-2">Premium Clinic System — modern patient care & scheduling.</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2">123 Health Ave, City</p>
          <p>Phone: +1 555 555 555</p>
          <p>Email: hello@medicore.demo</p>
        </div>
        <div>
          <h4 className="font-semibold">Follow</h4>
          <div className="flex gap-3 mt-3">
            <a className="bg-white/10 px-3 py-2 rounded">Twitter</a>
            <a className="bg-white/10 px-3 py-2 rounded">Facebook</a>
            <a className="bg-white/10 px-3 py-2 rounded">Instagram</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 text-center text-sm text-gray-300">
        © 2025 Medicore — Demo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;