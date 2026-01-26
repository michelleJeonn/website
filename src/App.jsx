
import React from 'react';

export default function Portfolio() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.cdnfonts.com/css/hangyaboly');
          
          .hangyaboly-font {
            font-family: 'Hangyaboly', sans-serif;
          }
          
          @keyframes slideInRight {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .slide-in-right {
            animation: slideInRight 1s ease-out;
          }
        `}

      </style>
      <div className="min-h-screen" style={{
        background: 'linear-gradient(to bottom, #ffb3b2, #FFFFFF)'
      }}>

        {/*logo*/
          <img
            src="/logo.png"
            alt="Logo"
            className="absolute top-10 left-10 w-60"
          />
        }

        {/*Navbar*/}
        <nav className="absolute top-0 right-10 p-12 flex gap-4">
          <button className="px-8 py-2 bg-white rounded-full hover:bg-pink-100 transition hangyaboly-font text-2xl">
            Work
          </button>
          <button className="px-8 py-2 bg-white rounded-full hover:bg-pink-100 transition hangyaboly-font text-2xl">
            Blog
          </button>
          <button className="px-8 py-2 bg-white rounded-full hover:bg-pink-100 transition hangyaboly-font text-2xl">
            About
          </button>
        </nav>

        <div className="flex flex-col items-center justify-start min-h-screen px-6 pt-12">
          <img
            src="/1.png"
            alt="Welcome banner"
            className="w-full max-w-8xl mb-8"
          />
          <img
            src="/Jeon.png"
            alt="Second image"
            className="absolute top-0 slide-in-right"
            style={{ left: '45%', top: '23%', width: '50%' }}
          />
          <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-6xl font-bold hangyaboly-font mb-4" style={{ color: '#ffb3b2' }}>
            Welcome to My Website
          </h1>        </div>
      </div>
    </>
  );
}