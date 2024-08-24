import React from 'react';
import video from "../../assest/video.mp4"; 
import "./HeroPage.css";

const HeroPage = () => {
  return (
    <div className="main-div relative h-full w-full">
      
      <video
        autoPlay
        loop
        muted
        className="video"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Hero Content */}
      {/* <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Welcome to 
          <span className='text-pink-400 h-full'> POOJA BOX</span>
        </h1>
      </div> */}
    </div>
  );
};

export default HeroPage;
