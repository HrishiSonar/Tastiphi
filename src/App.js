import React from "react";
import "./App.css";
import Header from "./components/Header";
// import Body from "./components/Body";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Errror from "./components/Errror";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/AboutUs",
        element: <About></About>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
    ],
    errorElement: <Errror></Errror>,
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
