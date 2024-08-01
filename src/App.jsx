import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screen/Home'
import About from './Screen/About'
import Contact from './Screen/Contact'
import Navbar from './Navbar/Navbar'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}> 
        <Route path='/home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App