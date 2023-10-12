import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Write from './pages/write/Write';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/register/Register';
import Login from './pages/login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/write",
    element: <Write/>,
  },
  {
  path: "/register",
    element: <Register/>,
  },
  {
  path: "/login",
    element: <Login/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

