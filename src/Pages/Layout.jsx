import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Layout.css";

const Layout = ({ children }) => (
  <div className="layout-container">
    <header className="layout-header">
      <nav className="layout-nav">
        <Link to="/" className="layout-link">
          Home
        </Link>
        <Link to="/books" className="layout-link">
          Books
        </Link>
        <Link to="/about" className="layout-link">
          About
        </Link>
        <Link to="/contact" className="layout-link">
          Contact
        </Link>
        <Link to="/admin" className="layout-link">
          Admin
        </Link>
      </nav>
    </header>
    <main className="layout-main">{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
