import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
    if (e.target.value) {
      navigate('/products');
    }
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
      </nav>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
      />
    </header>
  );
};

export default Header;
