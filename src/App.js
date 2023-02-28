import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Search } from "./pages/Search";

const App = () => {
  return (
      <Routes>
        <Route path="/login" element = { <Login/> } />
        <Route path="/register" element = { <Register/> } />
        <Route path="/search" element = { <Search/> } />
      </Routes>
  );
}

export default App;