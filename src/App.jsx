import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import Cart from './Cart'
import About from './About'
import NavBar from './NavBar'

function App() {
  return (
    
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
