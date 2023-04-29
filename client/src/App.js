import LandingPage from "./Components/landingPage/landing"
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/> z
      </Routes></div>
  );
}

export default App;
