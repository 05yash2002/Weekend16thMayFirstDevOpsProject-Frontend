import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // This fetches the data from your backend running on port 5000
    fetch('http://localhost:5000/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log('Error fetching backend:', err));
  }, []);

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>React Frontend</h1>
      <h2>Message from Backend:</h2>
      <p style={{ fontSize: '18px', color: '#333' }}>
        {message || "Loading message from backend..."}
      </p>
    </div>
  );
}

export default App;