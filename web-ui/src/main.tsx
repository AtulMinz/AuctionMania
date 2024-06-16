import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login.tsx";
import SelectionPage from "./pages/SelectionPage.tsx";
import MintPage from "./pages/MintPage.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import AuctionPage from "./pages/AuctionPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/services",
    element: <SelectionPage />,
  },
  {
    path: "/mint",
    element: <MintPage />,
  },
  {
    path: "/auction",
    element: <AuctionPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
