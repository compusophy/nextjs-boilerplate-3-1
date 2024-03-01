import React from 'react';

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputValue = formData.get('inputName'); // Assuming your input has a name attribute "inputName"
    console.log(inputValue); // Process your input value as needed
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputName"
          placeholder="Enter something..."
          className="border-2 border-gray-300 p-2"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </main>
  );
}
