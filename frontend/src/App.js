import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Registro';
import Home from './components/Home';
import './App.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={showLogin ? <Login setShowLogin={setShowLogin} /> : <Register setShowLogin={setShowLogin} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
