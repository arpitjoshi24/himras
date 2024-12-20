import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Footer from './components/footer/Footer';
import ProductDetails from './components/productsDetails/ProductDetails.jsx';
import './App.css';
import Cart from './pages/Cart/Cart.jsx';
// import Signup from './components/register/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* Added Dynamic Routes */}
        <Route
          path="/shop/product/:productId"
          element={<ProductDetails />}
        />
        <Route path="/mycart" element={<Cart />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
