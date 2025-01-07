import React, { createContext, useState, useContext } from "react";

// Create the Context
const StateContext = createContext();

const initialState = {
  UserProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    // Toggle the clicked state
    setIsClicked((prevState) => ({
      ...initialState,
      [clicked]: !prevState[clicked], // Toggle the clicked item
    }));
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
