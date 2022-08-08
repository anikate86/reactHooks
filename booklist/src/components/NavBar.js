import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Product Details</h1>
      <p>Currently you have {books.length} products</p>
    </div>
  );
}
 
export default Navbar;