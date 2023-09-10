import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Cards from "../components/Cards.jsx";
import "./css/dashboard.css";

function dashboard() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Cards />
    </div>
  );
}

export default dashboard;
