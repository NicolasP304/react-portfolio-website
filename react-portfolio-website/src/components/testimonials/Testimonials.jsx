import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/shaunak.png";
import AVATAR2 from "../../assets/paris.png";
import AVATAR3 from "../../assets/athan.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Shaunak Karuna",
    occupation: "University Peer",
    review: "Knowleagable individual with great work ethic and communication skills.",
  },
  {
    avatar: AVATAR2,
    name: "Paris Woods",
    occupation: "Co-Owner of Asques Collective",
    review: "Hard working with a proactive approach to tackle difficult problems with many solutions.",
  },
  {
    avatar: AVATAR3,
    name: "Athan Gekas",
    occupation: "University Peer",
    review: "Always happy and brings a positive mindset to all environments.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from University Peers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, occupation, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <h4 className="client_occupation">{occupation}</h4>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
