import React from 'react';

const About = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">Welcome to our e-commerce store! This application allows users to browse and purchase a variety of products. Users can view detailed information about each product, add items to their cart, and view their cart at any time.</p>
        <h2 className="text-2xl font-bold mb-4">Application Summary</h2>
        <p className="mb-4">Our e-commerce application is designed to provide a seamless shopping experience. It features product listings, detailed product views, a shopping cart, and an informative about page. The application is built with modern web development technologies, ensuring a responsive and user-friendly interface.</p>
        <h2 className="text-2xl font-bold mb-4">Skills Utilized</h2>
        <ul className="list-disc list-inside mb-4">
          <li>React.js for building the user interface</li>
          <li>React Router for navigation</li>
          <li>Tailwind CSS for styling</li>
          <li>Express.js for the backend server</li>
          <li>Mongoose and MongoDB for database management</li>
          <li>Local Storage for storing cart data</li>
          <li>Axios for making HTTP requests</li>
          <li>Toast component for displaying toast messages</li>
        </ul>
      </div>
    );
  };
  
  export default About;
