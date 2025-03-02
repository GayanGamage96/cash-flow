import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar__menu">
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* Top Logo */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-orange-800 dark:text-white">
            {/* <Image src="/logo.png" alt="logo" width={100} height={100} /> */}
            CASH FLOW
          </div>
        </div>
        {/* MENU */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          {/* <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={20}
          /> */}
          <h1 className="text-orange-700 font-bold text-2xl">CREPE RUNNER</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
