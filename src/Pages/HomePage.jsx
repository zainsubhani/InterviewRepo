import { Link } from "react-router-dom";
import "../styles/HomePage.css"; // Import CSS file

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to Book Store</h1>
      <nav className="home-nav">
        <Link to="/books" className="home-link">
          Books
        </Link>
        <Link to="/about" className="home-link">
          About
        </Link>
        <Link to="/contact" className="home-link">
          Contact
        </Link>
        <Link to="/admin" className="home-link">
          Admin
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
