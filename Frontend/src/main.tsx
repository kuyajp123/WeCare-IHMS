import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";

import './styles/globals.css'
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <BrowserRouter>
        <main className="dark:bg-bg">
          <App />
        </main>
      </BrowserRouter>
    </HeroUIProvider>
  </React.StrictMode>,
);
