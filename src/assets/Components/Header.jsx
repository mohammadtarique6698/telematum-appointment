import React, { useState } from "react";
import Logo from "../../../public/Logo/Telematum.png";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-4">
        <div>
          <a href="/">
            <img
              src={Logo}
              alt="Company Logo"
              className="h-20 w-20 rounded-full hover:scale-105 transition-all duration-200"
            />
          </a>
        </div>

        <div className="hidden sm:flex">
          <ul className="flex flex-col sm:flex-row gap-4 items-center font-bold text-md">
            <li className="hover:scale-105 transition-all duration-200">
              <a href="/">Home</a>
            </li>
            <li className="hover:scale-105 transition-all duration-200">
              <a href="/">About</a>
            </li>
            <li className="hover:scale-105 transition-all duration-200">
              <a href="/">Services</a>
            </li>
            <li className="hover:scale-105 transition-all duration-200">
              <a href="/">Contact</a>
            </li>
            <li className="hover:scale-105 transition-all duration-200">
              <a href="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </a>
            </li>
          </ul>
        </div>

        {/* For mobile screens */}
        <div className="sm:hidden">
          <button onClick={toggle}>
            {isOpen ? (
              <HiOutlineX className="w-7 h-7" />
            ) : (
              <HiMenu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "w-full flex justify-center items-center" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 items-center font-bold text-md w-full">
          <li className="w-full text-center hover:scale-105 transition-all duration-200 bg-orange-200 py-2 rounded-xl">
            <a href="/">Home</a>
          </li>
          <li className="w-full text-center hover:scale-105 transition-all duration-200 bg-orange-200 py-2 rounded-xl">
            <a href="/">About</a>
          </li>
          <li className="w-full text-center hover:scale-105 transition-all duration-200 bg-orange-200 py-2 rounded-xl">
            <a href="/">Services</a>
          </li>
          <li className="w-full text-center hover:scale-105 transition-all duration-200 bg-orange-200 py-2 rounded-xl">
            <a href="/">Contact</a>
          </li>
          <li className="hover:scale-105 transition-all duration-200">
            <a href="/">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Sign Up
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
