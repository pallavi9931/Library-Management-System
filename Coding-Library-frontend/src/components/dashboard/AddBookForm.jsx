import React, { useState } from "react";

const AddBookForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = () => {
    if (!title || !author || !quantity) return;
    
    onAdd({
      title,
      author,
      quantity: Number(quantity)
    });

    setTitle("");
    setAuthor("");
    setQuantity("");
  };

  return (
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
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddBookForm;
