import React from 'react';

const SideBar = ({ forceShow = false }) => {
  return (
    <div
      className={`${
        forceShow ? 'block' : 'hidden lg:block'
      } text-sm text-white lg:w-[300px]  w-screen h-full lg:pt-5 pt-14 border-[2px] border-pink-700 border-opacity-70 p-5 lg:rounded-xl shadow-[0_0_20px_2px_rgba(255,0,128,0.2)] lg:bg-transparent bg-black`}
    >
      <div className="cursor-pointer flex justify-between items-center border-[1px] border-pink-700 border-opacity-70 px-3 py-1 rounded-md shadow-[0_0_20px_2px_rgba(255,0,128,0.2)]">
        <p className="text-base font-semibold">Events</p>
        <img src="/Arrow (2).png" alt="" />
      </div>

      <div className="px-8 py-2 flex flex-col gap-2">
        <p className="cursor-pointer border-[1px] border-pink-700 border-opacity-70 px-3 py-1 rounded shadow-[0_0_20px_2px_rgba(255,0,128,0.2)]">
          New Requests
        </p>
        <div className="flex items-center justify-between -mb-2 mt-[-4px]">
          <p className="cursor-pointer px-3">Estimate</p>
          <img src="/Frame 39267.png" alt="" className="w-10 -my-2" />
        </div>
        <p className="cursor-pointer px-3">Events</p>
        <p className="cursor-pointer px-3">Partial Requests</p>
      </div>

      <p className="cursor-pointer px-3 py-2 text-base font-semibold">Positions</p>
      <p className="cursor-pointer px-3 py-2 text-base font-semibold">Contractors</p>

      <div className="mt-2">
        <div className="cursor-pointer flex items-center justify-between px-3">
          <p className="text-base font-semibold">Users</p>
          <img src="/Arrow (8).png" alt="" />
        </div>
        <div className="px-11 py-2 flex flex-col gap-2">
          <p className="cursor-pointer">Admins</p>
          <p className="cursor-pointer">Clients</p>
          <p className="cursor-pointer">Coordinators</p>
        </div>
      </div>

      <p className="cursor-pointer px-3 py-2 text-base font-semibold">Profile</p>

      <div className="mt-6 bg-black cursor-pointer flex gap-1 items-center justify-center border-[1px] border-black border-opacity-70 px-3 py-2 rounded-md shadow-[0_0_8px_2px_rgba(255,255,255,0.2)]">
        <img src="/Upload.png" alt="" className="w-4" />
        <p className="text-base">Logout</p>
      </div>
    </div>
  );
};

export default SideBar;
