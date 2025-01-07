import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Header, Sidebar, Settings, UserProfile } from "./components";
import { Line } from "./components/Charts/Line";
import { Pie } from "./components/Charts/Pie";
import  AdminPanel  from "./pages/AdminPanel";
import Menu1 from "./pages/Menu1";
import Menu2 from "./pages/Menu2";
import Menu3 from "./pages/Menu3";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { useStateContext } from "./context/ContextProvider";


const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: "blue", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}

        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? 'md:ml-72' : 'flex-2'
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>

          <Routes>
            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Menu */}
            <Route path="/menu1" element={<Menu1 />} />
            <Route path="/menu2" element={<Menu2 />} />
            <Route path="/menu3" element={<Menu3 />} />
            <Route path="/panel" element={<AdminPanel />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;