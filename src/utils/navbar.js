import React from "react";
import useId from "../hooks/useId";
const HomePage = React.lazy(() => import("../pages/Home/index"));
const Properties = React.lazy(() => import("../pages/Properties/index"));

// import HomePage from "../pages/Home/index";
// import PropertiesPage from "../pages/Properties/index";

export const navbar = [
  {
    id: useId,
    element: (
        <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
          <HomePage />
        </React.Suspense>
      ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Properties />
      </React.Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Generic Sign In</h1>,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
];
