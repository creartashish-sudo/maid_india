import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import './assets/css/style.css'
import './assets/css/bootstrap.css'
import './assets/css/memenu.css'
import './assets/css/jquery-ui.css'
import './assets/css/flexslider.css'
import './assets/css/form.css'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Type from './pages/Type'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProductDetail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/product' element={<Products />}/>
      <Route path='/type' element={<Type />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='/product-detail' element={<ProductDetail />}/>

      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
    <Footer />
      
    </>
  )
}

export default App
