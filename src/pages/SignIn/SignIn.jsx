import React, { useState } from "react";
import icon from "../../assets/images/icons/icon_sg.png";
import hero from '../../assets/images/banner/auth_hero.png'
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Navigate, useLocation } from 'react-router-dom';
function SignIn() {
  const { login, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const location = useLocation();
  const from = location.state?.from || '/projects';




  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    setSuccessMessage(null);

    if (!formData.username || !formData.password) {
      setError("Please fill in both fields.");
      setIsLoading(false);
      return;
    }

    try {
      const success = await login(formData);
      if (success.success) {
        setSuccessMessage("Login Successful!");
      } else {
        setError("Invalid username or password or server issue");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Invalid username or password.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={from} />;
  }

  return (
    <div className="grid h-screen w-screen grid-cols-1 bg-white md:grid-cols-2">
      <div className="border-gray-300 flex flex-col items-start justify-between border-r-2 p-4">
        <div className="mb-4 flex items-start">
          <img src={icon} alt="Icon" className="w-10" />
        </div>

        <div className="mb-4 flex w-full items-center justify-center">
          <img src={hero} alt="Hero" className="w-4/5 md:w-auto" />
        </div>

        <div className="flex w-full flex-row justify-evenly text-xs font-semibold md:justify-between md:text-sm">
          <p className="cursor-pointer hover:text-BrightGreen">
            <Link to="contact-us">Contact us</Link>
          </p>
          <p className="cursor-pointer hover:text-BrightGreen">
            <Link to="terms-and-condition">Terms and Conditions</Link>
          </p>
          <p className="cursor-pointer hover:text-BrightGreen">
            <Link to="privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex w-11/12 flex-col items-center md:w-4/5">
          <div className="text-start font-bold md:text-2xl">
            <p>Please enter your username and password to sign in</p>
          </div>
          <hr className="border-1 my-8 w-full border-solid border-graylight" />
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex w-full flex-col">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="border-gray-300 mb-4 w-full rounded-xl border p-2"
                required
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="border-gray-300 mb-4 w-full rounded-xl border p-2"
                required
              />
            </div>
            {error && <p className="mb-4 text-red-500 text-sm">{error}</p>}
            {successMessage && <p className="mb-4 text-ForestGreen text-sm">{successMessage}</p>}

            <p className="mb-4 text-start text-sm">
              By continuing, you agree to our{" "}
              <span className="cursor-pointer font-bold underline">
                Terms & Conditions
              </span>
            </p>

            <p className="mb-4 text-start text-sm">
              Create new account{" "}
              <span className="cursor-pointer font-bold underline">
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>

            <div className="flex md:h-2/6 lg:h-3/6 items-center justify-center ">
              <button
                type="submit"
                className="w-full rounded-xl bg-BrightGreen px-6 py-2 text-white transition duration-200 hover:bg-green-600"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Continue"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
