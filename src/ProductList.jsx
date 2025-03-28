import React from 'react'
import './ProductList.css';

const products = [
    { id: 1, name: "Copper Pipe", price: "$25", image: "pipe.jpg" },
    { id: 2, name: "Stainless Steel Faucet", price: "$80", image: "faucet.jpg" },
    { id: 3, name: "PVC Fittings", price: "$15", image: "fittings.jpg" },
  ];

export default function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
  )
}
