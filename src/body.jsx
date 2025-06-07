import React, { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { IoSend } from "react-icons/io5";
import { BsMicFill } from "react-icons/bs";

const Body = ({ isSidebarOpen, toggleSidebar }) => {
  const [message, setMessage] = useState("");

  return (
    <div
      className="flex w-full h-screen text-white"
      style={{ backgroundColor: "rgb(33, 33, 33)" }}
    >
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-3xl px-4">
            <div className="text-center mb-8 text-stone-300 text-4xl font-semibold">
              무엇을 도와드릴까요?
            </div>
            <div className="relative">
              <textarea
                className="w-full p-4 pr-12 rounded-lg bg-stone-700/50 border border-stone-600 focus:outline-none focus:border-stone-500 resize-none"
                rows="1"
                placeholder="Send a message..."
                style={{ minHeight: "56px" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-stone-600">
                {message.trim() ? (
                  <IoSend className="w-6 h-6 text-stone-300" />
                ) : (
                  <BsMicFill className="w-6 h-6 text-stone-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
