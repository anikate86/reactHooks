import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Product Record</h1>
      <div className="links">
        <Link to="/">All Products</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Add New Product</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;