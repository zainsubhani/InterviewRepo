import { useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

// Mock authentication
const useAuth = () => {
  const [isAdmin] = useState(false);
  return { isAdmin };
};

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useAuth();
  return isAdmin ? children : <Navigate to="/" replace />;
};

// Add PropTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoute;
