import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const admin = sessionStorage.getItem("userEmail");
  return <div>{admin ? <Outlet /> : <Navigate to="/signin" />}</div>;
}

export default PrivateRoute;
