import React from 'react'
import ReactDOM from 'react-dom/client'
// import "./tailwind.css";
import './index.css'
import "./main.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '@/App.jsx'
import Page from "@/Page";
import Menu from "@/Menu";
import Reservations from "@/Reservations";
import Contact from "@/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page element={<App/>}/>,
  },
  {
    path: "/menu",
    element: <Page hero={false} element={<Menu />}/>,
  },
  {
    path: "/reservations",
    element: <Page hero={false} element={<Reservations />}/>,
  },
  {
    path: "/contact",
    element: <Page hero={false} element={<Contact />}/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
