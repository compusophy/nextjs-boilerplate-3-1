// app/api/followUserApi.js

async function followUser(target_fid) {
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
      return data;
    } catch (error) {
      console.error('Error calling the Neynar API:', error);
      throw error; // Re-throw to handle it in the calling context
    }
  }
  
  export default followUser;
  