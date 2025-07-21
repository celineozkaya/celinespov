import { useState } from 'react'
import Navbar from "./components/Navbar.tsx";
import Diary from './pages/Diary.tsx';
import About from './pages/About.tsx';
import Home from './pages/Home.tsx';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import "@fontsource/archivo";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/900.css";
import Footer from './components/Footer.tsx';

function App() {

  return (
    <div className="app-container">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/diary' element={<Diary/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
