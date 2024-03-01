import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        {/* Meta tags for Farcaster initial frame */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
        <meta property="fc:frame:button:1" content="Show Input" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="URL_TO_DYNAMIC_FRAME" />
        {/* Add more meta tags as needed */}
      </Head>
      <h2>Make @compusophy Follow</h2>
      <button>Show Input</button>
    </div>
  );
}
