import API from "./api";

const getAvailableBooks = async () => {
  const response = await API.get("/books/available");
  return response.data;
};

const getIssuedBooks = async () => {
  const response = await API.get("/books/issued");
  return response.data;
};

const addBook = async (bookData) => {
  const response = await API.post("/books/add", bookData);
  return response.data;
};

const issueBook = async (id) => {
  const response = await API.post(`/books/issue/${id}`);
  return response.data;
};

const returnBook = async (id) => {
  const response = await API.post(`/books/return/${id}`);
  return response.data;
};

export const bookService = {
  getAvailableBooks,
  getIssuedBooks,
  addBook,
  issueBook,
  returnBook,
};
