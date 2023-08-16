import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Cart from "../components/Cart";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import RootLayout from "../layouts/RootLayout";
import LogIn from "../pages/LogIn";
export default function index() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
