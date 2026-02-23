import React from 'react';

const Cart = ({ cart, removeFromCart, totalAmount }) => {
  const cartStyle = {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    borderBottom: '1px solid #eee',
    backgroundColor: '#fff',
    marginBottom: '0.5rem',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  return (
    <div style={cartStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777' }}>Your cart is empty.</p>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {cart.map((item, index) => (
              <div key={index} style={itemStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
                    />
                  )}
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem 0', color: '#333' }}>{item.name}</h4>
                    <p style={{ margin: 0, color: '#666' }}>₹{item.price}</p>
                  </div>
                </div>
                <button
                  style={buttonStyle}
                  onClick={() => removeFromCart(index)}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#e60000')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#ff4d4d')}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'right', borderTop: '2px solid #ddd', paddingTop: '1rem' }}>
            <h3 style={{ margin: 0, color: '#333' }}>Total Amount: ₹{totalAmount}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
