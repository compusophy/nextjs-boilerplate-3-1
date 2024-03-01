import { useState, useEffect } from 'react';
import Head from 'next/head'; // Import Head component from Next.js

export default function Home() {
  const [fid, setFid] = useState('');

  useEffect(() => {
    // Listen for messages from the parent window
    window.addEventListener('message', handleMessage);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Handle message received from the parent window
  const handleMessage = (event) => {
    const { data } = event;
    if (data.action === 'submitFid') {
      handleSubmit(data.fid);
    }
  };

  const handleSubmit = async (fid) => {
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
      <Head>
        {/* Meta tags for Farcaster frame */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
        <meta property="fc:frame:button:1" content="Submit" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:1:target" content="https://farcaster.example.com" /> {/* Set target for the button action */}
        <meta property="fc:frame:input:text" content="Enter FID" />
        {/* Add more meta tags as needed */}
      </Head>
      <h2>Make @compusophy Follow</h2>
      <input
        type="text"
        value={fid}
        onChange={(e) => setFid(e.target.value)}
        placeholder="Enter FID"
      />
      <button onClick={() => handleSubmit(fid)}>Submit</button>
    </div>
  );
}
