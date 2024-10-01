import React, { useEffect, useState } from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="spinner relative w-20 h-20 flex justify-center items-center rounded-full">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className={`absolute w-9 h-2 bg-white shadow-sm`}
            style={{
              left: `${80 - 10 * i}px`,
              animationDelay: `${0.125 * i}s`,
            }}
          />
        ))}
      </div>

      {/* Spinner animation */}
      <style jsx>{`
        @keyframes dominos {
          50% {
            opacity: 0.7;
          }
          75% {
            transform: rotate(90deg);
          }
          80% {
            opacity: 1;
          }
        }
        .spinner span {
          animation: dominos 1s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
