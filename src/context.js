import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isSubmenuOpen,
        setIsSubmenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalState };
