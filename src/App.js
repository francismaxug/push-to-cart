
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from '././products/Products';
import Navbar from './components/nav/Navbar';
import CartList from './components/cartList/CartList';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<CartList />} />
      </Routes>
    </div>
  );
}

export default App;
