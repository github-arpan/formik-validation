import React, { createContext, useState } from "react";

// Create a context for the user data
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
