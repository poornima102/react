function About() {

  function showMessage() {
    document.getElementById("aboutMsg").innerText =
      "Hello from React! I love this page!";
    document.getElementById("aboutHeading").style.backgroundColor = "lightblue";
  }

  return (
    <div className="card p-4 mb-4">
      <h1 id="aboutHeading">This is the About Page</h1>
      <p id="aboutMsg">Click the button to see my enthusiasm!</p>
      <button className="btn btn-primary" onClick={showMessage}>
        Show Enthusiasm
      </button>
    </div>
  );
}

export default About;