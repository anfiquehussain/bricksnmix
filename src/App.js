import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";
import ContactUs from "./pages/ContactUs/ContactUs";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";
import SignIn from "./pages/SignIn/SignIn";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PrivateRoute from "./Protector/PrivateRoute"; // PrivateRoute component
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const location = useLocation();
  const excludedRoutes = ["/", "/signup"]; // Paths where Navbar shouldn't be displayed

  return (
    <div className="App">
      {/* Conditionally rendering Navbar if route is not in the excludedRoutes */}
      {!excludedRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/projects"
          element={
            <PrivateRoute>
              <Projects />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact-us"
          element={
            <PrivateRoute>
              <ContactUs />
            </PrivateRoute>
          }
        />
        <Route
          path="/services"
          element={
            <PrivateRoute>
              <Services />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

function AppWithRouter() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppWithRouter;
