// import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Work from './components/Work-management';

function App() {
  return (
    <div>
    <Navbar />
    <Header />
    <Work />
    </div>
  )
}

export default App
