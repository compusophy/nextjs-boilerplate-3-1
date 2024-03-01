import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [fid, setFid] = useState('');
  const [showInputFrame, setShowInputFrame] = useState(false);

  const handleSubmit = async () => {
    try {
      // Make the API call to Neynar API endpoint with fid included in the URL
      const apiUrl = `https://api.neynar.com/v2/farcaster/user/follow?fid=${fid}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api_key': process.env.NEYNAR_API_KEY,
        },
        body: JSON.stringify({
          signer_uuid: process.env.SIGNER_UUID,
          target_fids: [parseInt(fid)],
        }),
      });

      // Handle response
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
      } else {
        console.error('Failed to follow fid:', response.status);
      }
    } catch (error) {
      console.error('Error while following fid:', error.message);
    }
  };

  const handleShowInputFrame = () => {
    setShowInputFrame(true);
  };

  return (
    <div>
      <Head>
        {/* Meta tags for Farcaster frame */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="fc:frame:button:1" content="Show Input" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="#" />
        {/* Add more meta tags as needed */}
      </Head>
      <h2>Make @compusophy Follow</h2>
      {!showInputFrame && (
        <button onClick={handleShowInputFrame}>Show Input</button>
      )}
      {showInputFrame && (
        <>
          <input
            type="text"
            value={fid}
            onChange={(e) => setFid(e.target.value)}
            placeholder="Enter FID"
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
}
