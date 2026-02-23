import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount, setSearch, onLogout }) => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  };

  const cartLinkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
  };

  const badgeStyle = {
    backgroundColor: '#e74c3c',
    color: 'white',
    borderRadius: '50%',
    padding: '0.25rem 0.5rem',
    fontSize: '0.8rem',
    marginLeft: '0.5rem',
  };

  const searchInputStyle = {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    width: '40%',
  };

  const logoutButtonStyle = {
    backgroundColor: '#333',
    color: 'white',
    border: '1px solid #ccc',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '1rem',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
        EcomSite
      </Link>
      <input type="text" placeholder="Search products..." style={searchInputStyle} onChange={(e)=>setSearch(e.target.value)}/>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/cart" style={cartLinkStyle}>
          Cart
          {cartItemCount > 0 && <span style={badgeStyle}>{cartItemCount}</span>}
        </Link>
        <button onClick={onLogout} style={logoutButtonStyle}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
