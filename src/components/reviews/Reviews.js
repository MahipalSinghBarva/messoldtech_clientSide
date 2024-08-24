import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import user from "../../assest/account.png";
import Info from './Info';
import Remark from './Remark';

const testimonials = [
  {
    name: "Jyoti Roy",
    review: "Ye Thoda loose ho gya h hatho me, kya m ek-do nikal sakti hu??",
    date: "2 months ago",
    rating: 4.5,
  },
  {
    name: "Joymati Oinam",
    review: "Nice product",
    date: "2 months ago",
    rating: 4.5,
  },
  {
    name: "Sarmistha Sen",
    review: "Product is good. It would have been better if I had received the product in a box. Keep growing! 🙌",
    date: "2 months ago",
    rating: 4.5,
  },
  {
    name: "Deepak Nair",
    review: "I had a good experience shopping with My Pooja Box. The order was shipped on time and they replied to my emails swiftly.",
    date: "2 months ago",
    rating: 4.5,
  },
  {
    name: "Tawanda Zigara",
    review: "Their products are very good. You can tell that they have taken time to pack with care and the stones I bought felt really premium.",
    date: "2 months ago",
    rating: 4.5,
  },
];

const Reviews = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-carousel my-10 px-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 px-4 md:px-8 lg:px-16">
        <h2 className="text-lg md:text-2xl font-bold">Customer Reviews</h2>
        <button
          type="button"
          className="w-28 h-8 rounded-sm bg-pink-700 text-xs md:text-sm text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          View All
        </button>
      </div>

      {/* Slider Section */}
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex items-start">
                <img src={user} alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-sm font-bold">{testimonial.name}</h3>
                  <span className="text-xs text-gray-400">{testimonial.date}</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">{testimonial.review}</p>
            </div>
          </div>
        ))}
      </Slider>
        <Info />
        <Remark />
    </div>
  );
};

export default Reviews;
