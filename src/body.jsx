import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const Body = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className="w-full h-screen text-white"
      style={{ backgroundColor: "rgb(33, 33, 33)" }}
    >
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Body;
