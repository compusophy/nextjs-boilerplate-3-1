export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputText = formData.get('inputName'); // Ensure your input field's name attribute is "inputName"

    // Call your API route
    const response = await fetch('/api/followUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ target_fid: inputText }),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="inputName"
          type="text"
          placeholder="Your input here"
          className="border-2 border-gray-300 p-2"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </main>
  );
}
