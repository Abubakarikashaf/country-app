import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import productscreem from './screens/productscreem';
import ContactScreen from './screens/ContactScreen';
import Header from './components/Header';


import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/product" element={<productScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;