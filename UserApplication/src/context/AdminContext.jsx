import { createContext, useState } from "react";

export const AdminContext = createContext();

// eslint-disable-next-line react/prop-types
export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
