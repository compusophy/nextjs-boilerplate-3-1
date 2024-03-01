import followUser from './api/followUserApi';

export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputText = formData.get('inputName');

    try {
      const result = await followUser(inputText);
      console.log(result);
    } catch (error) {
      console.error('There was an issue with the follow user request:', error);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input name="inputName" type="text" placeholder="Enter FID" />
        <button type="submit">Follow User</button>
      </form>
    </main>
  );
}
