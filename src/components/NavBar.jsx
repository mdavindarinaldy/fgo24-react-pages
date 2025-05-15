import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-orange-500 p-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Burger Menu</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-200 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-200 hover:text-white">About</Link>
          <Link to="/contact" className="text-gray-200 hover:text-white">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;