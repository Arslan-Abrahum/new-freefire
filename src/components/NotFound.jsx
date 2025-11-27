import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <h1 className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 drop-shadow-lg">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-400 text-center mb-8 max-w-md">
        The page you are looking for doesn’t exist or has been moved.  
        Please go back to the login page and try again.
      </p>

      <Link
        to="/"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default NotFound;
