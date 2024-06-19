import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import AdminConsole from "./pages/AdminConsole"

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Login />} />
      <Route path="admin" element={<AdminConsole />} />
    </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
