import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';
import Registration from './registration';
import userData from './userdata.json';


export default function App() {

  const [cart,setCart]=useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const product=[
    {
      id:1,
      name:"Laptop",
      price:50000,
      image:"https://rukminim2.flixcart.com/image/480/640/kd3f3bk0/computer/a/n/6/honor-na-thin-and-light-laptop-original-imafu2vrufgh6gcs.jpeg?q=90"
    },
    {
      id:2,
      name:"Mobile",
      price:20000,
      image:"data:image/jpeg;base64,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"

    },
    {
      id:3,
      name:"Charger",
      price:1000,
      image:"data:image/jpeg;base64,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"

    }
  ]

  const filteredProducts = product.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    // Initialize userdata in localStorage from JSON file if not exists
    if (!localStorage.getItem('userdata')) {
      localStorage.setItem('userdata', JSON.stringify(userData));
    }
  }, []);

  function addToCart(product){   //is product me 1 product aayega
    setCart([...cart,product]);
  }

  function removeFromCart(index){
    const updatecart=cart.filter((_,i)=>i!=index);
    setCart(updatecart);
  }

  function handleLogin(loggedInUser) {
    setUser(loggedInUser);
    localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
  }

  function handleLogout() {
    setUser(null);
    localStorage.removeItem('currentUser');
  }

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);
  return (
    <Router>
      {user ? (
      <>
      <Navbar cartItemCount={cart.length} setSearch={setSearch} onLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={
          <>
            <div style={{ textAlign: 'center', padding: '3rem 1rem', backgroundColor: '#f8f9fa', marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#333' }}>Welcome to EcomSite, {user.username}</h1>
              <p style={{ fontSize: '1.2rem', color: '#666' }}>Discover amazing products at unbeatable prices.</p>
            </div>
            <ProductList products={filteredProducts} addToCart={addToCart}/>
          </>
        } />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} totalAmount={totalAmount}/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </>
      ) : (
        <Routes>
          <Route path="/login" element={<Registration onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  )
}