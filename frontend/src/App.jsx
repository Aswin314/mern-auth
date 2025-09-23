import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from './Components/Header'

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
            <Header />
          <Routes>
            <Route>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/signin' element={<SignIn />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
