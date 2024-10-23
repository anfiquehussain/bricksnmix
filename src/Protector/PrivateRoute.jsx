import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (isAuthenticated) {
        return children; // Protected component is rendered here
    } else {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

};


export default PrivateRoute;
