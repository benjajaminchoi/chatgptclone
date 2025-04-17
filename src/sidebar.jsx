import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed left-0 w-64 h-screen bg-stone-900">
      <div className="h-16 p-2 flex justify-between">
        <div className="flex items-center">
          <div className="p-2 hover:bg-stone-600 rounded-lg">
            <Bars3BottomLeftIcon className="h-6 w-6 text-stone-300" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-2 hover:bg-stone-600 rounded-lg">
            <MagnifyingGlassIcon className="h-6 w-6 text-stone-300 hover:bg-stone-600 rounded-lg" />
          </div>
          <div className="p-2 hover:bg-stone-600 rounded-lg">
            <PencilSquareIcon className="h-6 w-6 text-stone-300 hover:bg-stone-600 rounded-lg" />
          </div>
        </div>
      </div>{" "}
      //header의 상단바
    </div>
  );
};

export default Sidebar;
