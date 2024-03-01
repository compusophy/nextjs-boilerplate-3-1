// pages/api/followUser.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { target_fid } = req.body; // Extract target_fid from the incoming request
  
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'api_key': '96DF8866-B2A8-4C2F-8D93-9487246B1BB7',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          target_fids: [target_fid], 
          signer_uuid: '130f560f-c9c7-41ab-ba06-da8d1223f5ce'
        })
      };
  
      try {
        const response = await fetch('https://api.neynar.com/v2/farcaster/user/follow', options);
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: "Error calling the Neynar API" });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  