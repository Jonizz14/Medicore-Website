import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { TESTIMONIALS } from '../data';

const Testimonials = () => {
  return (
    <section className="container py-16">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-display font-bold">What Patients Say</h2>
        <p className="text-gray-500">Real feedback from our patients.</p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-white rounded-xl card-shadow">
              <p className="text-gray-700">"{testimonial.text}"</p>
              <div className="mt-4 font-semibold">— {testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;