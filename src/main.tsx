import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { RouterProvider } from "react-router";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
