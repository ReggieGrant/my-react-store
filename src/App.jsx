import './App.css'
import Navbar from './componets/navbar'
import About from './pages/about'
import Catalog from './pages/catalog'
import Home from './pages/home'
import Contact from './pages/contact'
import Admin from './pages/admin'
import ProductForm from './componets/productForm'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import QuantityPicker from './componets/quantityPicker'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/catalog' element={<Catalog/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/admin' element={<Admin/>} ></Route>
        <Route path='/productform' element={<ProductForm/>} ></Route>
      </Routes>
      
      
      
      {/* footer */}

    </BrowserRouter>
  );
}

export default App
