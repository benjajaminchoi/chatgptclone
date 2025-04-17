import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Sidebar from "./sidebar";
import Header from "./header";
import Body from "./body";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Sidebar />
    <Body />
  </StrictMode>
);
