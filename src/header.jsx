import React from "react";
import {
  ChevronDownIcon,
  ArrowUpTrayIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import profile_pic from "./assets/user_states/profile_pic.jpg";
import { TbLayoutSidebar } from "react-icons/tb";
import { FaPenToSquare } from "react-icons/fa6";

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const iconButtonClass =
    "p-2 hover:bg-stone-800 rounded-lg cursor-pointer mr-4";

  const actionButtons = [
    {
      condition: !isSidebarOpen,
      onClick: toggleSidebar,
      icon: <TbLayoutSidebar className="h-6 w-6 text-stone-300" />,
    },
    {
      condition: !isSidebarOpen,
      onClick: () => alert("New chat"),
      icon: <FaPenToSquare className="h-6 w-6 text-stone-300" />,
    },
  ];

  return (
    <header
      className={`top-0 h-16 text-white flex justify-between p-2 transition-all duration-300 ease-in-out w-full`}
    >
      <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-stone-800">
        {!isSidebarOpen && (
          <div
            className="p-2 hover:bg-stone-800 rounded-lg cursor-pointer mr-4"
            onClick={toggleSidebar}
          >
            <TbLayoutSidebar className="h-6 w-6 text-stone-300" />
          </div>
        )}
        <h1 className="font-semibold text-stone-300 ">ChatGPT 4o</h1>
        <ChevronDownIcon className="h-4 w-4" />
      </div>
      <div className="flex items-center p-4 space-x-4">
        <button
          className="px-4 py-2 text-white rounded-full border-stone-600 border-1 flex items-center space-x-2 hover:bg-stone-800"
          onClick={() => alert("Share")}
        >
          <ArrowUpTrayIcon className="h-5 w-5" />
          <span>Share</span>
        </button>
        <div className="rounded-full hover:bg-stone-800 p-1">
          <EllipsisVerticalIcon className="h-8 w-8" />
        </div>
        <img src={profile_pic} className="h-8 w-8 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
