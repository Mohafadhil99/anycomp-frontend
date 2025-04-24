// src/pages/Items.js
import React, { useEffect, useState } from 'react';

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/items?page=0&size=100")
      .then((res) => res.json())
      .then((data) => setItems(data.content || data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Item List</h2>
      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - {item.description} (RM{item.price})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Items;