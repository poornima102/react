import './App.css';
import profilecard from "./images/profilecard.jpg";


function App() {
  let name ="Poornima";
  let description = "I am learning React";

 let cardStyle = {
  border: "1px solid black",
  padding: "20px",
  backgroundColor: "lightgray",
  width: "350px",
  textAlign: "center",      
  borderRadius: "10px"   
};
   let  externalImg ="https://wallpapers.com/images/hd/cute-smiley-profile-picture-uiyygmpi0s8mlp8u.jpg";
  return (
      <div className="container d-flex justify-content-center mt-5">
    <div style={cardStyle}>
    <img src={profilecard} width="150" alt="profile" style={{marginBottom:"10px"}} />
    <h1>{name}</h1>
    <p>{description}</p>
   <img src={externalImg} width="150" alt="external" />
    </div>
    </div>
  );
}

export default App;
