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
       
       
          <span
            style={{ background: dotColor }}
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
          />
         {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked,handleClick,screenSize,setScreenSize} =
    useStateContext();

    useEffect(()=>{
      const handleResize=()=>{
        setScreenSize(window.innerWidth);
      }
      window.addEventListener('resize',handleResize);
      handleResize();
      return ()=> window.removeEventListener('resize',handleResize);
    },[])

    useEffect(()=>{
      if(screenSize<=900){
        setActiveMenu(false);
      }else{
        setActiveMenu(true);
      }
    },[screenSize])



  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Search"
          customFunc={() => console.log("search click")}
          color="blue"
          icon={<AiOutlineSearch />}
        />
        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          color="blue"
          icon={<RiNotification3Line />}
        />

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
        {isClicked.UserProfile && <UserProfile />}
        {isClicked.notification && <Notifications />}
      </div>
    </div>
  );
};

export default Navbar;
