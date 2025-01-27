import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/HomePage";
import BooksList from "./Pages/HomePage";
import BookDetail from "./Pages/BookDetail";
import About from "./Pages/About";
import Contact from "./Pages/contact";
import ProtectedRoute from "./Pages/ProtectedRoute";
import NotFound from "./Pages/NotFound";
import { Admin } from "./Pages/Admin";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
