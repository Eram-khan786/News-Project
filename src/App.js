import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fetch from './components/Fetch'; // Import the Fetch component
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/general' element={<Fetch category="general" />} />
          <Route path='/business' element={<Fetch category="business" />} />
          <Route path='/entertainment' element={<Fetch category="entertainment" />} />
          <Route path='/health' element={<Fetch category="health" />} />
          <Route path='/science' element={<Fetch category="science" />} />
          <Route path='/sports' element={<Fetch category="sports" />} />
          <Route path='/technology' element={<Fetch category="technology" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
