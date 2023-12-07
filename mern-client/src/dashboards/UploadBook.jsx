import React, { useState } from "react";
import { Label, TextInput, Select, Textarea, Button } from "flowbite-react";

function UploadBook() {
  const bookCategories = ["Mystery", "Horror", "Science Fiction", "Psychology", "Business", "Science", "Nonfiction", "Fiction", "Romance", "History", "Travel", "Religion"];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  // Form Submission
  const handleBookSubmission = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const bookCategory = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObject = {
      bookTitle,
      authorName,
      imageURL,
      bookCategory,
      bookDescription,
      bookPDFURL,
    };

    console.log(bookObject);

    // Send data to the database
    fetch("http://localhost:7000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Book uploaded successfully");
        form.reset();
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">UploadBook</h2>

      <form onSubmit={handleBookSubmission} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* 1st Row */}
        <div className="flex gap-8">
          {/* Book Title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required />
          </div>
          {/* Author Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
          </div>
        </div>

        {/* 2nd Row */}
        <div className="flex gap-8">
          {/* Book Image */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput id="imageURL" name="imageURL" type="text" placeholder="Image URL" required />
          </div>
          {/* Book Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select name="category" id="inputState" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" type="text" name="bookDescription" placeholder="Once a upon a time, there lived a ghost..." required rows={7} className="w-full" />
        </div>

        {/* Book PDF Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF Link" />
          </div>
          <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book URL" required />
        </div>

        <Button type="submit">Upload Book</Button>
      </form>
    </div>
  );
}

export default UploadBook;
