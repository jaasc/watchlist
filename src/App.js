import React, { useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watch, setWatch] = useState(() => JSON.parse(localStorage.getItem("watchlist")) || [])

  return (
    <BrowserRouter>
      <Layout/>
      <Routes>
        <Route exact path="/" element={<Home watch={watch} setWatch={setWatch}/>}/>
        <Route path="/watchlist" element={<Watchlist watch={watch} setWatch={setWatch}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
