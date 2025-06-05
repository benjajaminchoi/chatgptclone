import React from "react";
import logo from "../public/vite.svg";
import { TbLayoutSidebar, TbSearch, TbLibrary } from "react-icons/tb";
import { FaPenToSquare } from "react-icons/fa6";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const containerClass = `left-0 h-screen transition-all duration-300 ease-in-out ${
    isOpen ? "w-64" : "w-0"
  }`;

  const menuItemClass =
    "flex items-center px-4 py-2 hover:bg-stone-800 rounded-lg gap-2";

  const menuItems = [
    {
      icon: <FaPenToSquare className="h-4 w-4 text-stone-300" />,
      label: "New chat",
    },
    {
      icon: <TbSearch className="h-4 w-4 text-stone-300" />,
      label: "Search chat",
    },
    {
      icon: <TbLibrary className="h-4 w-4 text-stone-300" />,
      label: "Library",
    },
  ];

  return (
    <div
      className={containerClass}
      style={{ backgroundColor: "rgb(24, 24, 24)" }}
    >
      <div
        className={`h-16 p-2 flex justify-between ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <div className="flex items-center">
          <div className="p-2 hover:bg-stone-800 rounded-lg">
            <img src={logo} alt="Logo" className="h-6 w-6" />
          </div>
        </div>
        <div className="flex items-center">
          <div
            className="p-2 hover:bg-stone-800 rounded-lg cursor-pointer"
            onClick={toggleSidebar}
          >
            <TbLayoutSidebar className="h-6 w-6 text-stone-300" />
          </div>
        </div>
      </div>

      <div className={isOpen ? "block" : "hidden"}>
        {menuItems.map((item, index) => (
          <div key={index} className={menuItemClass}>
            {item.icon}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
