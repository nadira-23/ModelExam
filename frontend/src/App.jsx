import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Email from './components/Email'
import Welcome from './components/Welcome'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
            <Routes>
                <Route path="/" element={<Email />} />
                <Route path="/welcome" element={<Welcome/>} />
            </Routes>
       
    </>
  )
}

export default App
