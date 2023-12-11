import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Pagination } from "flowbite-react";

function ManageBooks() {
  const [allBooks, setAllBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    fetch("http://localhost:7000/books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  // Delete book by ID
  const handleDelete = (id) => {
    const deletePrompt = window.confirm("Are you sure you want to delete this book?");

    if (deletePrompt) {
      console.log(id);
      fetch(`http://localhost:7000/books/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Book deleted successfully");
          window.location.reload();
        });
    }
  };

  // Pagination
  const totalPages = Math.ceil(allBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, allBooks.length);
  const currentBooks = allBooks.slice(startIndex, endIndex);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Books</h2>

      {/* Books Table */}
      <Table hoverable className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>Book ID</Table.HeadCell>
          <Table.HeadCell>Book Title</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {currentBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{startIndex + index + 1}</Table.Cell>
              <Table.Cell>{book.bookTitle}</Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$10</Table.Cell>
              <Table.Cell>
                <Link to={`/admin/dashboard/edit/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-3">
                  <button className="bg-yellow-400 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">Edit</button>
                </Link>
                <button onClick={() => handleDelete(book._id)} className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <Pagination layout="table" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
      </div>
    </div>
  );
}

export default ManageBooks;
