import LandingPage from "./Components/landingPage/landing"
import Home from "./Components/homePage/home"
import Detail from "./Components/Detail/Detail"
import Create from "./Components/Create/Create"

import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
