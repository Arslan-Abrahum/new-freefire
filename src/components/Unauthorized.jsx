import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <h1 className="text-[6rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 drop-shadow-lg">
        🚫
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Unauthorized Access
      </h2>
      <p className="text-gray-400 text-center mb-8 max-w-md">
        You don’t have permission to view this page.  
        Please log in with valid credentials to continue.
      </p>

      <Link
        to="/"
        className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default Unauthorized;
