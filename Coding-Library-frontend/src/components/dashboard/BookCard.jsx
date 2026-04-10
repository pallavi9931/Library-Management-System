import React from "react";

const bookImage = "https://cdn-icons-png.flaticon.com/512/29/29302.png";

const BookCard = ({ book, type, onIssue, onReturn }) => {
  return (
    <div className="book-card" key={book.id}>
      <img src={bookImage} className="book-img" alt="book" />

      <h4>{book.title}</h4>
      <p>{book.author}</p>

      <p> Available: {book.quantity} / {book.totalQuantity}</p>
      <p> Issued: {book.totalQuantity - book.quantity}</p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {type === "available" && (
          <button
            onClick={() => onIssue(book.id)}
            disabled={book.quantity === 0}
          >
            Issue
          </button>
        )}

        {type === "issued" && (
          <button
            onClick={() => onReturn(book.id)}
            disabled={book.quantity === book.totalQuantity}
          >
            Return
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
