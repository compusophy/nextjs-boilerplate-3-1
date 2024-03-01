export default function Home() {
  // This component is client-side, so it handles the form submission directly.
  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputText = formData.get('inputName'); // Make sure your input field has the name="inputName"

    // Here, we call the API route
    try {
      const response = await fetch('/api/followUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ target_fid: inputText }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

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
