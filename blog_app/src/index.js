import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Write from './pages/write/Write';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Home from './pages/home/Home';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/write",
    element: <Write/>,
  },
  {
  path: "/",
    element: <App/>,
  },
  {
  path: "/login",
    element: <Login/>,
  },
  {
  path: "/settings",
    element: <Settings/>,
  },
  {
  path: "/single",
    element: <Single/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

