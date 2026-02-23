import React from "react";
export default function ProductCard({product, addToCart}){
    return(
        <div style={{ minWidth: '200px', border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px', flexShrink: 0 }}>
            <img src= {product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>₹{product.price}</p>
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
    );
}