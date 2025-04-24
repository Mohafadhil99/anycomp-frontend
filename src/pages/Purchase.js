// src/pages/Purchase.js
import React, { useState, useEffect } from 'react';

function Purchase() {
  const [buyerId, setBuyerId] = useState('');
  const [itemId, setItemId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const [buyers, setBuyers] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/buyers?page=0&size=100")
      .then((res) => res.json())
      .then((data) => setBuyers(data.content || data));

    fetch("http://localhost:8080/items?page=0&size=100")
      .then((res) => res.json())
      .then((data) => setItems(data.content || data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const purchaseData = {
      buyerId: parseInt(buyerId),
      itemId: parseInt(itemId),
      quantity: parseInt(quantity)
    };

    fetch("http://localhost:8080/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(purchaseData)
    })
      .then((res) => {
        if (res.ok) {
          setMessage("Purchase completed successfully!");
          setBuyerId('');
          setItemId('');
          setQuantity(1);
        } else {
          setMessage("Error making purchase.");
        }
      })
      .catch(() => setMessage("Network error."));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Create Purchase</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Buyer:</label><br />
          <select value={buyerId} onChange={(e) => setBuyerId(e.target.value)} required>
            <option value="">-- Select Buyer --</option>
            {buyers.map((b) => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: 10 }}>
          <label>Item:</label><br />
          <select value={itemId} onChange={(e) => setItemId(e.target.value)} required>
            <option value="">-- Select Item --</option>
            {items.map((i) => (
              <option key={i.id} value={i.id}>{i.name}</option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: 10 }}>
          <label>Quantity:</label><br />
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: 10 }}>Make Purchase</button>
      </form>

      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </div>
  );
}

export default Purchase;