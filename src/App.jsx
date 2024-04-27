import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Introduction from './Components/Introduction.jsx'
import AboutMe from './Components/AboutMe.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Introduction/>
      <AboutMe/>
    </>
  )
}

export default App
