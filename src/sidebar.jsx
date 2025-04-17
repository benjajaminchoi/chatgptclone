import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed left-0 w-64 h-screen bg-stone-900">
      <div className="h-16 p-4 flex justify-between">
        <div>
          <Bars3BottomLeftIcon className="h-6 w-6 text-stone-300" />
        </div>
        <div className="flex space-x-4">
          <MagnifyingGlassIcon className="h-6 w-6 text-stone-300" />
          <PencilSquareIcon className="h-6 w-6 text-stone-300" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
