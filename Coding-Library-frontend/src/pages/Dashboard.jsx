import React from "react";
import { useBooks } from "../hooks/useBooks";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import AddBookForm from "../components/dashboard/AddBookForm";
import BookList from "../components/dashboard/BookList";
import "../App.css";

function Dashboard() {
  const {
    availableBooks,
    issuedBooks,
    loading,
    error,
    handleAddBook,
    handleIssueBook,
    handleReturnBook
  } = useBooks();

  if (loading) {
    return <div className="container"><p>Loading books...</p></div>;
  }

  if (error) {
    return <div className="container"><p style={{ color: "red" }}>Error: {error}</p></div>;
  }

  return (
    <div className="container">
      <DashboardHeader />

      <AddBookForm onAdd={handleAddBook} />

      <BookList
        title="Available Books"
        books={availableBooks}
        type="available"
        onIssue={handleIssueBook}
      />

      <BookList
        title="Issued Books"
        books={issuedBooks}
        type="issued"
        onReturn={handleReturnBook}
      />
    </div>
  );
}

export default Dashboard;