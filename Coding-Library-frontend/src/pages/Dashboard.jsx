import { useEffect, useState } from "react";
import API from "../services/api";
import "../App.css";

function Dashboard() {

  const [availableBooks, setAvailableBooks] = useState([]);
  const [issuedBooks, setIssuedBooks] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const availableRes = await API.get("/books/available");
    const issuedRes = await API.get("/books/issued");

    setAvailableBooks(availableRes.data);
    setIssuedBooks(issuedRes.data);
  };

  const addBook = async () => {
    await API.post("/books/add", {
      id: Math.floor(Math.random() * 1000),
      title,
      author,
      quantity: Number(quantity)
    });

    setTitle("");
    setAuthor("");
    setQuantity("");
    fetchBooks();
  };

  const issueBook = async (id) => {
    await API.post(`/books/issue/${id}`);
    fetchBooks();
  };

  const returnBook = async (id) => {
    await API.post(`/books/return/${id}`);
    fetchBooks();
  };

  
  const bookImage = "https://cdn-icons-png.flaticon.com/512/29/29302.png";

  const renderCard = (b, type) => (
    <div className="book-card" key={b.id}>
      <img src={bookImage} className="book-img" alt="book" />

      <h4>{b.title}</h4>
      <p>{b.author}</p>

      <p> Available: {b.quantity} / {b.totalQuantity}</p>
      <p> Issued: {b.totalQuantity - b.quantity}</p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>

  
        {type === "available" && (
          <button
            onClick={() => issueBook(b.id)}
            disabled={b.quantity === 0}
          >
            Issue
          </button>
        )}

        
        {type === "issued" && (
          <button
            onClick={() => returnBook(b.id)}
            disabled={b.quantity === b.totalQuantity}
          >
            Return
          </button>
        )}

      </div>
    </div>
  );

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="container">

      <h2> Coding Library</h2>

      <button
        onClick={logout}
        style={{ position: "absolute", top: "20px", right: "20px" }}
      >
        Logout 
      </button>

    
      <div>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Qty"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={addBook}>Add</button>
      </div>

    
      <h3> Available Books</h3>
      <div className="book-grid">
        {availableBooks.length === 0 ? (
          <p>No books available </p>
        ) : (
          availableBooks.map(b => renderCard(b, "available"))
        )}
      </div>

      
      <h3> Issued Books</h3>
      <div className="book-grid">
        {issuedBooks.length === 0 ? (
          <p>No books issued </p>
        ) : (
          issuedBooks.map(b => renderCard(b, "issued"))
        )}
      </div>

    </div>
  );
}

export default Dashboard;