import Head from 'next/head';
import { useState } from 'react';

export default function DynamicFrame() {
  const [fid, setFid] = useState('');

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

  return (
    <div>
      <Head>
        {/* Meta tags for Farcaster dynamic frame */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
        <meta property="fc:frame:input:text" content="Enter FID" />
        <meta property="fc:frame:button:1" content="Submit" />
        <meta property="fc:frame:button:1:action" content="post" />
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
