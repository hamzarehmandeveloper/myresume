import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainScreen from "./components/main_page/mainscreen.jsx";
import React from "react";
import NavBar from "./components/navbar/navbar.jsx";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      {
        <Router>
          <Routes>
            <Route path="/" element={<MainScreen />} />
          </Routes>
        </Router>
      }
    </React.Fragment>
  );
}

export default App;
