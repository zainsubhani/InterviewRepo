import { Link } from "react-router-dom";
import mockData from "../constant/mockdata.json";
import "../styles/HomePage.css";

const BooksList = () => {
  const { books } = mockData; // Destructure books array from the imported JSON

  return (
    <div className="books-container">
      <h2 className="books-heading">Books Catalog</h2>
      <ul className="books-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <Link to={`/books/${book.id}`} className="book-link">
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
