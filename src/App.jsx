import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; // Make sure the path is correct
import Home from './Home';   // Make sure the path is correct
import Signuppage from './Signuppage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route for Login */}
        <Route path="/" element={<Login />} />
        
        {/* Route for Home Page */}
        <Route path="/home" element={<Home />} />

        <Route path='/signup' element={<Signuppage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;