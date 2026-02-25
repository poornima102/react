import logo from './logo.svg';
import './App.css';

function App() {
 const name = "Alex";
 const age = 20;
 const isStudent =true;

 const favoriteHobbies = ["Reading", "Hiking", "Coding"];

 const headingColor = "lightblue";
 const showMessage =() => {document.getElementById("msg").innerText="Hello from React! I love my hobbies!";
  document.getElementById("heading").style.backgroundColor = headingColor;
 };
  let hobbyListFor =[];
  for (let i =0;i<favoriteHobbies.length;i++){
    hobbyListFor.push(<li key={i}>{ favoriteHobbies[i]}</li>);
  }
  return(
    <div className="container mt-4">
       <h1 id="heading" className="text-center p-2">
        My Profile
      </h1>

         <div className="card p-3 mb-3">
        <h3>Personal Information</h3>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent.toString()}</p>
      </div>


        <div className="mb-3">
        <h4>Hobbies (For Loop)</h4>
        <ul>{hobbyListFor}</ul>
      </div>


      <div className="mb-3">
        <h4>Hobbies (map)</h4>
        <ul>
          {favoriteHobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

        <button className="btn btn-primary" onClick={showMessage}>
        Show Enthusiasm
      </button>

        <p id="msg" className="mt-3">
        Click the button to see my enthusiasm!
      </p>

    </div>
  );
};

export default App;
