import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

function FavoriteBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Best Seller books" />
    </div>
  );
}

export default FavoriteBooks;
