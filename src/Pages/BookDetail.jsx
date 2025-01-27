import { Link, useParams } from "react-router-dom";
import mockData from "../constant/mockdata.json"; // Import the JSON file
import "../styles/BookDetail.css"; // Import the CSS file for styling

const BookDetail = () => {
  const { id } = useParams();
  const { books } = mockData;
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="book-not-found">
        <h2>Book not found!</h2>
        <Link to="/books" className="back-link">
          Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="book-detail-container">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">
        <strong>Author:</strong> {book.author}
      </p>
      <p className="book-description">{book.description}</p>
      <Link to="/books" className="back-link">
        Back to Catalog
      </Link>
    </div>
  );
};

export default BookDetail;
