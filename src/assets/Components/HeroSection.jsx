import React from "react";
import HeroImage from "../../../public/Hero/Appointment-Bookkeeping.png";

const HeroSection = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex flex-col lg:flex-row gap-4 justify-between ">
        <div>
          <h1 className="text-5xl font-bold mb-5 text-blue-900 uppercase">
            Appointment
          </h1>
          <h1 className="font-semibold text-4xl mb-5 uppercase">Booking</h1>
          <h3 className="font-extrabold text-blue-950 text-2xl mb-5">
            Explore, Schedule, and Stay Organized
          </h3>
          <p className="text-lg font-light text-black/80 mb-5 w-80">
            Take charge of your health and time. View, manage, and schedule
            appointments at your convenience.
          </p>
          <button className="bg-blue-700 text-white font-bold px-3 py-2 rounded">
            Learn More
          </button>
        </div>
        <div>
          <img src={HeroImage} alt="Hero Image" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
