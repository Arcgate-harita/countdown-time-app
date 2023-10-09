import React from 'react';
import './App.css';
import Timer from './Timer';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Timer />} />
        <Route path="/" exact component={About} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
