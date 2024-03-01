// This assumes you're working within the constraints of a Next.js application
// and want to trigger an API call from a client-side component.

function Home() {
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here, replace '/api/followUser' with the path to your API route or external API
    const response = await fetch('/api/followUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ target_fid: inputValue }),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
