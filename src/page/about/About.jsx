

import React from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';

const About = () => {
    return (
        <div className="bg-indigo-600 text-white py-10 h-screen">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg mb-8 flex items-center gap-x-2">
                <FaRegHandPointRight /> Welcome to our furniture selling website! We are passionate about providing high-quality furniture to our customers.
                </p>
          <p className="text-lg mb-8 flex items-center gap-x-2">
                <FaRegHandPointRight /> 
                    Our mission is to create beautiful and functional furniture pieces that enhance the comfort and style of your home.
                </p>
          <p className="text-lg mb-8 flex items-center gap-x-2">
                <FaRegHandPointRight /> 
                    With a wide range of furniture options to choose from, we strive to meet the unique needs and preferences of every customer.
                </p>
          <p className="text-lg mb-8 flex items-center gap-x-2">
                <FaRegHandPointRight /> 
                    Whether you're looking for a cozy sofa, a stylish dining table, or a comfortable bed, we have it all.
                </p>
          <p className="text-lg mb-8 flex items-center gap-x-2">
                <FaRegHandPointRight /> 
                    Thank you for choosing us as your furniture provider. We look forward to serving you and helping you create the perfect living space.
                </p>
            </div>
        </div>
    );
};

export default About;