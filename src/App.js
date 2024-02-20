import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { LoginPage, SingupPage } from "./Route.js";
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singn-up" element={<SingupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
