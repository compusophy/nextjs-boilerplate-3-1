// This API route in Next.js acts as a proxy to the Neynar API.
// Place this in your pages/api directory.

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { target_fid } = req.body;
  
      // Use your provided SDK setup and call structure here
      const sdk = require('api')('@neynar/v2.0#ijuc1zlt7on9ue');
  
      sdk.followUser({
        target_fids: [target_fid],
        signer_uuid: '130f560f-c9c7-41ab-ba06-da8d1223f5ce'
      }, {
        api_key: '96DF8866-B2A8-4C2F-8D93-9487246B1BB7'
      })
      .then(({ data }) => {
        res.status(200).json(data);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while calling Neynar API.' });
      });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end('Method Not Allowed');
    }
  }
  