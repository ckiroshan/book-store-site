import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import Blog from "../components/Blog";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboards/DashboardLayout";
import Dashboard from "../dashboards/Dashboard";
import UploadBook from "../dashboards/UploadBook";
import ManageBooks from "../dashboards/ManageBooks";
import EditBooks from "../dashboards/EditBooks";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../private-routing/PrivateRoute";
import Logout from "../components/Logout";

const router = createBrowserRouter([
  // User routes
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:7000/books/${params.id}`),
      },
    ],
  },

  // Admin routes
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit/:id",
        element: <EditBooks />,
        loader: ({ params }) => fetch(`http://localhost:7000/books/${params.id}`),
      },
    ],
  },

  // User Authentication
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
]);

export default router;
