
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import './components/Header'
import Header from './components/Header'
import Footr from './components/Footr'

function App() {


  return (
    <>
   
     <Routes>
      <Route element={<Landing/>} path='/' />
      <Route element={<Home/>} path='/home' />
     </Routes>
     <Footr/>
    </>
  )
}

export default App
