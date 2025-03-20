// import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Work from './components/Work-management';
import Customize from './components/Customize';
import CustomPrice from './components/Customise_price';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Work />
      <Customize />
      <CustomPrice />
    </div>
  )
}

export default App
