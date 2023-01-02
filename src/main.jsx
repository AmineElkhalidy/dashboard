import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Routing
import { BrowserRouter } from "react-router-dom";

// Pro sidebar
import { ProSidebarProvider } from "react-pro-sidebar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
