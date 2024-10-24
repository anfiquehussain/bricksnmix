import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../constant/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token"),
  );

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser
      ? JSON.parse(storedUser)
      : {
          user_name: "",
          user_type: "",
          email: "",
        };
  });

  const [error, setError] = useState(null);

  // Update user and authentication state based on localStorage values
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && !isAuthenticated) {
      setIsAuthenticated(true);
    }
    if (storedUser && !user.user_name) {
      setUser(JSON.parse(storedUser));
    }
  }, [isAuthenticated, user]);

  // Logout function to reset the state and clear localStorage
  const logout = () => {
    setIsAuthenticated(false);
    setUser({
      user_name: "",
      user_type: "",
      email: "",
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  // Login function to handle API call and update the state
  const login = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}api/v2/login/`, formData,{
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userData = {
        user_name: response.data.Data.user_name,
        user_type: response.data.Data.user_type,
        email: response.data.Data.email,
      };
      

      localStorage.setItem("token", response.data.Data.access);
      localStorage.setItem("user", JSON.stringify(userData));

      setUser(userData);
      setIsAuthenticated(true);
      setError(null);

      return { success: true, message: response.data.message }; // Return success status
    } catch (error) {
      console.error("Error during Login!", error);
      const errorMessage =
        error.response?.data.message || "Login failed. Please try again.";
      setError(errorMessage);
      return { success: false, message: error.response.data }; // Return failure status
    }
  };

  const register = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}seller-signup/`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data.message);
      console.log(response);

      return { success: true, message: response.data.message }; // Indicate success
    } catch (error) {
      if (error.response) {
        // console.error(error.response.data);
        setError(error.response.data.message || "Signup failed"); // Display specific error message
      } else {
        setError("An error occurred");
      }
      return { success: false, message: error.response.data }; // Indicate failure
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, setUser, login, logout, register, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
