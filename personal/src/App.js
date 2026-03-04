import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;