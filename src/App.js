
import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./LoginPage/Login"
import Registration from "./RegistrationPage/Registration"
// import LandingPage from "./LoginPage/LandingPage"
import Mfa from './MFA/Mfa';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<LandingPage />}></Route> */}
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/mfa" element={<Mfa />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
