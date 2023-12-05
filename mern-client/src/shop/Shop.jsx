import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxCharactersToShow = 150; // Set the maximum number of characters to show initially

  useEffect(() => {
    fetch("http://localhost:7000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card className="max-w-sm">
            <img src={book.imageURL} className="object-cover h-3/4" alt="" />
            <h5 className="text-2xl font-bold  text-center tracking-tight text-gray-900 dark:text-white">{book.bookTitle}</h5>
            <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
              {showFullDescription ? book.bookDescription : `${book.bookDescription.slice(0, maxCharactersToShow)}...`}
              {!showFullDescription && (
                <Link to={`/books/${book._id}`} className="text-blue-700 hover:underline focus:outline-none">
                  See more
                </Link>
              )}
            </p>
            <button className="bg-blue-700 font-semibold text-white py-2 rounded">Buy Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
