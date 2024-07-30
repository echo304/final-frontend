import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

const Toast = ({ message, show, duration, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-300 text-white p-4 rounded transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
      {message}
    </div>
  );
};

export default Toast;
