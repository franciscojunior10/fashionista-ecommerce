import React, { useState, useEffect } from 'react';

import './styles.css';

import getData from '../../services/api';

import Header from '../../components/Header';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getData();
    setProducts(data);
  };

  return (
    <>
      <Header />
      {products.map((product) => (
        <div>
          <span>{product.name}</span>
        </div>
      ))}
    </>
  );
}
