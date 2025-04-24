import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';
import AddBuyer from './pages/AddBuyer';
import AddSeller from './pages/AddSeller';
import Purchase from './pages/Purchase';
import ViewPurchases from './pages/ViewPurchases';

function App() {
  return (
    <Router>
      <nav style={{ padding: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/items" style={{ marginRight: 10 }}>Items</Link>
        <Link to="/add-buyer" style={{ marginRight: 10 }}>Add Buyer</Link>
        <Link to="/add-seller" style={{ marginRight: 10 }}>Add Seller</Link>
        <Link to="/purchase" style={{ marginRight: 10 }}>Purchase</Link>
        <Link to="/view-purchases">View Purchases</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/add-buyer" element={<AddBuyer />} />
        <Route path="/add-seller" element={<AddSeller />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/view-purchases" element={<ViewPurchases />} />
      </Routes>
    </Router>
  );
}

export default App;
