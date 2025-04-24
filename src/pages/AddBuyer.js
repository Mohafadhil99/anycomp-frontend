// src/pages/AddBuyer.js
import React, { useState } from 'react';

function AddBuyer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const buyerData = {
      name: name,
      email: email
    };

    fetch("http://localhost:8080/buyers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(buyerData)
    })
      .then((res) => {
        if (res.ok) {
          setMessage("Buyer added successfully!");
          setName('');
          setEmail('');
        } else {
          setMessage("Error adding buyer.");
        }
      })
      .catch(() => setMessage("Network error."));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add New Buyer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Add Buyer</button>
      </form>
      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </div>
  );
}

export default AddBuyer;