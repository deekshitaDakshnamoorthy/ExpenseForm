import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./Pages/HomePage";
import {About} from "./Pages/About";
import ExampleuseState from './Pages/ExampleuseState';
import ExpenseForm from './Pages/ExpenseForm';
const router = createBrowserRouter([
  {
  path: "/",
element:<App/>,
children: [
  {
    path: "/home",
    element:<HomePage/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  
  {
    path: "/example",
    element: <ExampleuseState/>,
  },
  {
    path: "/form",
    element: <ExpenseForm/>,
  },
  
  {
    path: "*",
    element: <div className="layout-container__wrapper">Page not found</div>,
  },
],
},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router =
    {router}></RouterProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();