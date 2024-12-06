import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
