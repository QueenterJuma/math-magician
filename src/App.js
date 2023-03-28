import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Calculator from './component/Calculator';
import FetchQuote from './component/Quote';
import Home from './component/Home';
import Navigation from './component/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<FetchQuote />} />
      </Routes>
    </div>
  );
}

export default App;
