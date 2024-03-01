// Next.js API route for handling the follow action
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fid } = req.body;
    const response = await fetch('https://api.neynar.com/v2/farcaster/user/follow', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'api_key': process.env.NEYNAR_API_KEY,
      },
      body: JSON.stringify({
        signer_uuid: process.env.SIGNER_UUID,
        target_fids: [parseInt(fid)],
      }),
    });
    const jsonResponse = await response.json();
    res.status(200).json(jsonResponse);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
