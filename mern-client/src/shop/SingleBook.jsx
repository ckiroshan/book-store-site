import React from "react";
import { useLoaderData } from "react-router-dom";

function SingleBook() {
  const { _id, bookTitle, imageURL } = useLoaderData();
  return <div className="mt-28 px-4 lg:px-24">
    <h2>{bookTitle}</h2>
    <img src={imageURL} className="h-96" alt="" />
  </div>;
}

export default SingleBook;
