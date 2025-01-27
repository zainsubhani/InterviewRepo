import { Link } from "react-router-dom";
import "../styles/BookList.css"; // Import the CSS file for styling
import mockData from "../constant/mockdata.json";
const BooksList = () => {
  const { books } = mockData;

  return (
    <div className="books-container">
      <h2 className="books-heading">Books Catalog</h2>
      <ul className="books-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <Link to={`/books/${book.id}`} className="book-link">
              {book.title} <span className="book-author">by {book.author}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
