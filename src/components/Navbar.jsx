import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Notifications, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        {dotColor && (
          <span
            style={{ background: dotColor }}
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
          />
        )}
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } =
    useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize])

  return (
    <div className="flex justify-between items-center p-2 md:mx-6 relative">
      <div className="flex items-center gap-4">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color="blue"
          icon={<AiOutlineMenu />}
        />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-blue-400 px-8 py-2 rounded-2xl">
          <h1 className="text-white text-2xl font-semibold">
            Springfield media
          </h1>
        </div>
      </div>

      <div className="flex items-center relative">
        <NavButton
          title="Search"
          customFunc={() => console.log("search click")}
          color="blue"
          icon={<AiOutlineSearch />}
        />
        <div className="relative">
          <NavButton
            title="Notifications"
            dotColor="#03C9D7"
            customFunc={() => handleClick("notification")}
            color="blue"
            icon={<RiNotification3Line />}
          />
          {isClicked.notification && (
            <div className="absolute right-0 top-full mt-2 z-50">
              <Notifications />
            </div>
          )}
        </div>

        <div className="relative">
          <TooltipComponent content="UserProfile" position="BottomCenter">
            <div
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => handleClick("UserProfile")}
            >
              <img src="image.png" className="rounded-full w-12 h-10" alt="" />
              <p>
                <span className="text-gray-600 font-semibold ml-1 text-lg">
                  Evan Yates
                </span>
              </p>
              <Link to="/UserProfile" className="flex items-center">
                <MdKeyboardArrowDown className="text-black text-xl" />
              </Link>
            </div>
          </TooltipComponent>
          {isClicked.UserProfile && (
            <div className="absolute right-0 top-full mt-2 z-50">
              <UserProfile />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;