import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

function BestSellerBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Best Seller books" />
    </div>
  );
}

export default BestSellerBooks;
