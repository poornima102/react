function Home() {

  function showMessage() {
    document.getElementById("homeMsg").innerText =
      "Hello from React! I love this page!";
    document.getElementById("homeHeading").style.backgroundColor = "lightblue";
  }

  return (
    <div className="card p-4 mb-4">
      <h1 id="homeHeading">This is the Home Page</h1>
      <p id="homeMsg">Click the button to see my enthusiasm!</p>
      <button className="btn btn-primary" onClick={showMessage}>
        Show Enthusiasm
      </button>
    </div>
  );
}

export default Home;