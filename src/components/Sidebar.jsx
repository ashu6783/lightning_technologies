import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiGrid } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiAirplay } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Button from "./Button";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
  const {activeMenu,setActiveMenu,screenSize}=useStateContext();
  const handleCloseSidebar = () => {
    if(activeMenu && screenSize<=900){
      setActiveMenu(false);
    }
  }
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl  tracking-tight dark:text-white"
            >
              <span>
                {" "}
                <img 
                  src="/logo.png"
                  alt="Lightning Technologies"
                  className="h-20"
                />
              </span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}

                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ml-8 text-xl font-semibold gap-8">
          <NavLink
           onClick={handleCloseSidebar}
              to="/dashboard"
              className="flex items-center gap-4 py-2 px-3 text-gray-600 hover:bg-gray-100 rounded-lg"
              activeClassName="bg-blue-50 text-blue-600"
            >
              <FiGrid />
              Dashboard
            </NavLink>
            <NavLink
             onClick={handleCloseSidebar}
              to="/menu1"
              className="flex items-center gap-4 py-2 px-3 text-gray-600 hover:bg-gray-100 rounded-lg"
              activeClassName="bg-blue-50 text-blue-600"
            >
              <FiLayers />
              Menu 1
            </NavLink>
            <NavLink
             onClick={handleCloseSidebar}
              to="/menu2"
              className="flex items-center gap-4 py-2 px-3 text-gray-600 hover:bg-gray-100 rounded-lg"
              activeClassName="bg-blue-50 text-blue-600"
            >
              <FiCalendar />
              Menu 2
            </NavLink>
            <NavLink
              to="/menu3"
              onClick={handleCloseSidebar}
              className="flex items-center gap-4 py-2 px-3 text-gray-600 hover:bg-gray-100 rounded-lg"
              activeClassName="bg-blue-50 text-blue-600"
            >
              <FiAirplay />
              Menu 3
            </NavLink>
            <NavLink
              to="/admin-panel"
              onClick={ handleCloseSidebar}
              className="flex items-center gap-4 py-2 px-3 text-gray-600 hover:bg-gray-100 rounded-lg"
              activeClassName="bg-blue-50 text-blue-600"
            >
              <FiUsers />
              Admin Panel
            </NavLink>
          </div>
    
        </>
      )}
    </div>
  );
};

export default Sidebar;