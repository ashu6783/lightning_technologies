import React, { createContext, useState, useContext, useEffect } from "react";

const StateContext = createContext();

const initialState = {
  UserProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode');
    if (savedTheme) setCurrentMode(savedTheme);
  }, []);

  const setMode = (mode) => {
    setCurrentMode(mode);
    localStorage.setItem('themeMode', mode);
  };

  const handleClick = (clicked) => {
    setIsClicked(prevState => ({
      ...initialState,
      [clicked]: !prevState[clicked],
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
        currentMode,
        setMode,
        themeSettings,
        setThemeSettings
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);