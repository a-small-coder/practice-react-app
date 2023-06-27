import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import MainPage from './pages/MainPage'
import CatalogPage from './pages/CatalogPage'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/catalog" element={<CatalogPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
    </>
    
  )
}

export default App
