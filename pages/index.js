import { useState } from 'react';

export default function Home() {
  const [fid, setFid] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('/api/follow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fid }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h2>Make @compusophy Follow</h2>
      <input
        type="text"
        value={fid}
        onChange={(e) => setFid(e.target.value)}
        placeholder="Enter FID"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
