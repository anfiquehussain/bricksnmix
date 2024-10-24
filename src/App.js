import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";
import ContactUs from "./pages/ContactUs/ContactUs";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";
import SignIn from "./pages/SignIn/SignIn";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound"; // Import the NotFound page component

function App() {
  const location = useLocation();
  const excludedRoutes = ["/sign-in", "/sign-up"];

  return (
    <div className="App">
      {!excludedRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/projects" />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for undefined paths */}
      </Routes>
      {!excludedRoutes.includes(location.pathname) && <Footer />}
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
