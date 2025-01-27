import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import BooksList from "./Pages/BooksList"; // Corrected import for BooksList
import BookDetail from "./Pages/BookDetail";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProtectedRoute from "./Pages/ProtectedRoute";
import NotFound from "./Pages/NotFound";
import { Admin } from "./Pages/Admin";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Books Catalog and Details */}
          <Route path="/books" element={<BooksList />} />
          <Route path="/books/:id" element={<BookDetail />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* Protected Admin Page */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

          {/* Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
