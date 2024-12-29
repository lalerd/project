import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={navStyle}>
      <div style={navContentStyle}>
        {/* Logo veya site adı */}
        <div style={logoStyle}>
          <h3 style={{ color: '#fff' }}>Admin Panel</h3>
        </div>

        {/* Hamburger menü butonu */}
        <div className="hamburger" style={hamburgerStyle} onClick={toggleMenu}>
          <span style={hamburgerLineStyle}></span>
          <span style={hamburgerLineStyle}></span>
          <span style={hamburgerLineStyle}></span>
        </div>

        {/* Menü */}
        <ul style={isMenuOpen ? { ...ulStyle, display: 'flex' } : ulStyle}>
          <li style={liStyle}>
            <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
          </li>
          <li style={liStyle}>
            <Link to="/users" style={linkStyle}>Users</Link>
          </li>
          <li style={liStyle}>
            <Link to="/content" style={linkStyle}>Content Management</Link>
          </li>
          <li style={liStyle}>
            <Link to="/reports" style={linkStyle}>Reports</Link>
          </li>
          <li style={liStyle}>
            <Link to="/" style={linkStyle}>Log Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Navbar ana stil
const navStyle = {
  backgroundColor: '#79c2d0',  
  color: 'white',
  padding: '8px 15px',
  position: 'sticky',
  top: 0,
  width: '100%',
  zIndex: 1000,
};

// Navbar içeriği düzenlemesi
const navContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

// Logo stil
const logoStyle = {
  color: 'white',
  fontWeight: 'bold',
  fontSize: '8px',
};

// Hamburger menü stili
const hamburgerStyle = {
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '30px',
  height: '15px',
  cursor: 'pointer',
};

// Hamburger menü çizgileri
const hamburgerLineStyle = {
  width: '100%',
  height: '1px',
  backgroundColor: 'white',
  borderRadius: '5px',
};

// Navbar linklerinin stilini ayarlama
const ulStyle = {
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  flex: 1,
  justifyContent: 'space-around',
};

// Navbar linkli öğe stil
const liStyle = {
  marginRight: '20px',
};

// Navbar linklerinin stilini ayarlama
const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '15px',
  fontWeight:'bold',
  padding: '5px 8px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

// Navbar linklerinin hover efekti
const hoverEffect = {
  '&:hover': {
    backgroundColor: '#4caf50', // Yeşil renk hover
  },
};



export default Navbar;
