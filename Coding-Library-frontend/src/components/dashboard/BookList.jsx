import React from "react";
import BookCard from "./BookCard";

const BookList = ({ title, books, type, onIssue, onReturn }) => {
  return (
    <>
      <h3>{title}</h3>
      <div className="book-grid">
        {books.length === 0 ? (
          <p>No books {type}</p>
        ) : (
          books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              type={type}
              onIssue={onIssue}
              onReturn={onReturn}
            />
          ))
        )}
      </div>
    </>
  );
};

export default BookList;
