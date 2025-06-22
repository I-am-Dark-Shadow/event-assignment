import React, { useState } from 'react';
import SideBar from './SideBar';

export default function Topbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* Topbar */}
      <div className="w-full h-[74px] flex items-center justify-between px-[20px] lg:px-[40px] bg-transparent z-50 relative">
        <div className="flex items-center gap-2">
          <img src="/bitcoin-01.png" alt="" className="w-[40px] lg:w-[45px] cursor-pointer" />
          <img
            src="/menu-01.png"
            alt="Menu"
            className="lg:hidden block cursor-pointer"
            onClick={() => setShowSidebar(true)}
          />
        </div>

        <div className="flex items-center lg:ml-0">
          <img src="/Info Circle.png" alt="" className="w-[70px] h-[70px] cursor-pointer lg:mr-0 mr-[-40px]" />
          <img src="/Notification.png" alt="" className="w-[70px] h-[70px] lg:mr-0 mr-[-40px] lg:ml-[-20px] cursor-pointer" />

          <div className="flex items-center lg:ml-0">
            <img src="Ellipse 1.png" alt="" className="lg:w-[90px] w-[85px] cursor-pointer" />
            <div className="text-white cursor-pointer lg:text-xs text-[11px]">
              <p className="">Hi, <span className="text-[#00EEC5]">Muhammad Asad</span></p>
              <p className="">welcome back!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Popup */}
      {showSidebar && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-90 lg:hidden flex justify-start">
          <div className="relative h-full">
            
            <button
              className="absolute top-2 right-4 text-white text-3xl z-10"
              onClick={() => setShowSidebar(false)}
            >
              &times;
            </button>

            
            <SideBar forceShow />
          </div>

          
          <div className="flex-1" onClick={() => setShowSidebar(false)} />
        </div>
      )}
    </>
  );
}
