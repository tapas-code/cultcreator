import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrandOwner from "./pages/BrandOwner";
import Influencers from "./pages/Influencers";
import Transactions from "./pages/Transactions";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<BrandOwner />} />
          <Route path="/influencers" element={<Influencers />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
