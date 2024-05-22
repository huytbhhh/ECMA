import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Okok } from './lab3/ProductList ';
import ProductDetail from './lab4/Product_detail';
import { Asm1 } from './asm-1/Asm';


function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/lab3" element={<Okok/>} />
        <Route path="/lab4" element={<ProductDetail/>} />
        <Route path="/" element={<Asm1/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
