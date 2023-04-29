import landingPage from "./Components/landingPage/landing"
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
        <Route path='/' element={<landingPage/>}/>
    </Routes>
  );
}

export default App;
