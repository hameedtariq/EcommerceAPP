import Product from './pages/Product';
import Home from './pages/Home'
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/register"  element={user ? <Navigate to= "/"/> : <Register/>}></Route>
        <Route path="/login"  element= {user ? <Navigate to= "/"/> : <Login/>}></Route>
        <Route path="/cart"  element= {<Cart/>}></Route>
        <Route path="/products">
          <Route index element= {<ProductList/>}></Route>
          <Route path=":category" element= {<ProductList/>}></Route>
        </Route>
        <Route path="/product/:id"  element= {<Product/>}></Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;