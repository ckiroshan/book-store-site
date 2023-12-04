import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SiteFooter from "./home/SiteFooter";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <SiteFooter />
    </>
  );
}

export default App;
