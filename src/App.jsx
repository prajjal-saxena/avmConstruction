import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/home/index";
import About from "./pages/about/index";
import Services from "./pages/service/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element= {<About/>} />
          <Route path='/service' element = {<Services/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
