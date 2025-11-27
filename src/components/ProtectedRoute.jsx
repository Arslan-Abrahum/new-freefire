import React from "react";
import Unauthorized from "./Unauthorized";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    return <Unauthorized />;
  }

  return children;
};

export default ProtectedRoute;
