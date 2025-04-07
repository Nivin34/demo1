import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white p-4 text-center container mx-auto">
      <div className=" mx-auto">
        <div className="flex justify-center items-center space-x-2 mb-2">
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <span>and</span>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} ACE Software Solutions Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;