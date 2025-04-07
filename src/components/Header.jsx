import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/AceLogo.png";
import brochure from "../assets/CRM.pdf";
import { LuLogIn } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";
import { TbFileDownload } from "react-icons/tb";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 lg:px-6 xl:px-14 flex items-center justify-between container mx-auto">
      <div className="flex items-center">
        <div className="mr-1 -mt-1 sm:mr-3 ">
        <img src={logo} alt=""  className='h-11 sm:h-12 sm:w-15'/>
        </div>
        <div>
          <h1 className="font-bold text-sm sm:text-lg text-gray-800">ACE Software Solutions</h1>
          <p className=" text-[12px] sm:text-sm text-gray-600">Engineering Excellence</p>
        </div>
      </div>


      <div className="hidden lg:flex items-center space-x-8">
        <a href="#features" className="flex items-center text-gray-700 hover:text-gray-900">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
          </svg>
          Features
        </a>
        <a href="#pricing" className="flex items-center text-gray-700 hover:text-gray-900">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          Pricing
        </a>

        <a href="#contact" className="flex items-center text-gray-700 hover:text-gray-900">
        <RiContactsLine className='mr-1.5  w-5 h-[18px] mb-0.5 ' />
          Contact Us
        </a>

        <a href={brochure} className="flex items-center text-gray-700 hover:text-gray-900" download={brochure}>
        <TbFileDownload className='mr-1.5  w-5 h-[18px] mb-0.5 ' />
          Brochure
        </a>
      </div>
          
          
       
      <Link to="/signin" className="hidden md:flex lg:hidden items-center ml-64 text-gray-700 hover:text-white hover:bg-green-800 p-1 border border-gray-800  rounded-lg  ">
   <span className='mr-2'><LuLogIn /></span>
          Sign In
        </Link>

      <div className="hidden lg:flex items-center space-x-8">
        <Link to="/signin" className="flex items-center text-gray-700 hover:text-white hover:bg-green-800 p-1 border border-gray-800  rounded-lg  ">
   <span className='mr-2'><LuLogIn /></span>
          Sign In
        </Link>
        <Link to="mailto:sales@acesoft.in" className="flex items-center text-gray-700 hover:text-gray-900 lg:hidden  xl:flex ">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          sales@acesoft.in
        </Link>
      </div>

      <div className="lg:hidden">
        <button 
          onClick={toggleMenu}
          className="flex items-center text-gray-700 p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 lg:hidden z-50">
          <div className="flex flex-col space-y-4 px-6 py-4">
           
            <a href="#features" className="flex items-center text-gray-700 hover:text-gray-900 py-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>
              Features
            </a>
            <a href="#pricing" className="flex items-center text-gray-700 hover:text-gray-900 py-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
              </svg>
              Pricing
            </a>
            <a href="#contact" className="flex items-center text-gray-700 hover:text-gray-900">
        <RiContactsLine className='mr-1.5  w-5 h-[18px]  ' />
          Contact Us
        </a>
            <Link to="/signin" className=" md:hidden flex items-center text-gray-700 hover:text-gray-900 py-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              Sign In
            </Link>
            <Link to="mailto:sales@acesoft.in" className="flex items-center text-gray-700 hover:text-gray-900 py-2  ">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              sales@acesoft.in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;