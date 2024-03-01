import { useState } from 'react';
import Head from 'next/head'; // Import Head component from Next.js

export default function Home() {
  const [fid, setFid] = useState('');

  const handleSubmit = async () => {
    // Construct the API call URL with the fid
    const apiUrl = `/api/follow?fid=${fid}`;
    const response = await fetch(apiUrl, {
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
        <meta property="fc:frame:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="fc:frame:button:1" content="Submit" />
        <meta property="fc:frame:button:1:action" content="post" />
        {/* Note: Omitting the fc:frame:button:1:target meta tag */}
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
