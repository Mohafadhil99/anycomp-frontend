// src/pages/ViewPurchases.js
import React, { useEffect, useState } from 'react';

function ViewPurchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/purchases?page=0&size=100")
      .then((res) => res.json())
      .then((data) => setPurchases(data.content || data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Purchase Records</h2>
      {purchases.length === 0 ? (
        <p>No purchases found.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>ID</th>
              <th>Buyer</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.buyer?.name || "N/A"}</td>
                <td>{p.item?.name || "N/A"}</td>
                <td>{p.quantity}</td>
                <td>{p.purchaseDate || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewPurchases;