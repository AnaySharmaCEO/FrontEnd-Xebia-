import React from 'react';
import ProductCard from './ProductCard';
export default function ProductList({products, addToCart}){
    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
            {products.map((product)=>
            <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}/>
            )}
        </div>
    )
}