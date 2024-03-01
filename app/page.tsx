import { useState } from 'react';

function HomePage() {
  const [fid, setFid] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api_key': '96DF8866-B2A8-4C2F-8D93-9487246B1BB7',
        'content-type': 'application/json'
      },
      body: JSON.stringify({ target_fids: [parseInt(fid)], signer_uuid: '130f560f-c9c7-41ab-ba06-da8d1223f5ce' })
    };

    fetch('https://api.neynar.com/v2/farcaster/user/follow', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fid}
          onChange={(e) => setFid(e.target.value)}
          placeholder="Enter FID"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
