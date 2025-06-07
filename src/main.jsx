import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Body from "./body";
import { useState } from "react";
import { StagewiseToolbar } from "@stagewise/toolbar-react";

const stagewiseConfig = {
  plugins: [],
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Body isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {process.env.NODE_ENV === "development" && (
        <StagewiseToolbar config={stagewiseConfig} />
      )}
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
