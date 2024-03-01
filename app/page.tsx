export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Existing content remains unchanged */}
      <form className="space-y-4">
        <input type="text" placeholder="Your input here" className="border-2 border-gray-300 p-2" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
      {/* Rest of the existing content remains unchanged */}
    </main>
  );
}
