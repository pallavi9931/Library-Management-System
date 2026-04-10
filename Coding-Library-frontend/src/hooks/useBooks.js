import { useState, useEffect, useCallback } from "react";
import { bookService } from "../services/bookService";

export const useBooks = () => {
  const [availableBooks, setAvailableBooks] = useState([]);
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const [availableRes, issuedRes] = await Promise.all([
        bookService.getAvailableBooks(),
        bookService.getIssuedBooks()
      ]);
      setAvailableBooks(availableRes);
      setIssuedBooks(issuedRes);
      setError(null);
    } catch (err) {
      setError(err.message || "Failed to fetch books");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleAddBook = async (bookData) => {
    try {
      await bookService.addBook({
        ...bookData,
        id: Math.floor(Math.random() * 1000)
      });
      fetchBooks();
    } catch (err) {
      console.error("Failed to add book:", err);
    }
  };

  const handleIssueBook = async (id) => {
    try {
      await bookService.issueBook(id);
      fetchBooks();
    } catch (err) {
      console.error("Failed to issue book:", err);
    }
  };

  const handleReturnBook = async (id) => {
    try {
      await bookService.returnBook(id);
      fetchBooks();
    } catch (err) {
      console.error("Failed to return book:", err);
    }
  };

  return {
    availableBooks,
    issuedBooks,
    loading,
    error,
    handleAddBook,
    handleIssueBook,
    handleReturnBook,
    refreshBooks: fetchBooks
  };
};
