import React from "react";
import { ChevronDownIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import profile_pic from "./assets/user_states/profile_pic.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 w-[calc(100%-16rem)] h-16 left-64 bg-stone-800 text-white flex justify-between p-2">
      <div className="flex items-center space-x-2 p-4 hover:bg-stone-600 rounded-lg">
        <h1 className="font-semibold text-stone-300">ChatGPT 4o</h1>
        <ChevronDownIcon className="h-4 w-4" />
      </div>
      <div className="flex items-center p-4 space-x-4">
        <button
          className="px-4 py-2 text-white rounded-full border-stone-600 border-1 flex items-center space-x-2 hover:bg-stone-600"
          onClick={() => alert("Share")}
        >
          <ArrowUpTrayIcon className="h-5 w-5" />
          <span>Share</span>
        </button>
        <img src={profile_pic} className="h-8 w-8 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
