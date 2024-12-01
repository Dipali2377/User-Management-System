import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
  const { isAdmin } = useContext(AdminContext);

  return isAdmin ? children : <Navigate to={"/not-admin"} />;
};
