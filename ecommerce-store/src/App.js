import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <main>
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/products" element={<Products searchQuery={searchQuery} />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;