import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Import the CSS file

function Home() {
  return (
    <div className="container" >
      <h1 className="hover-glow name">vaishnavi</h1>
      <p className="hover-glow contact">contact:  0000011111</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;