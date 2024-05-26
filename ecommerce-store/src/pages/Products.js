import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
    ];

    if (searchQuery) {
      setProducts(allProducts.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase())));
    } else {
      setProducts(allProducts);
    }
  }, [searchQuery]);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;