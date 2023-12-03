import React from "react";
import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavoriteBooks from "./FavoriteBooks";
import PromoBanner from "./PromoBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBooks />
      <FavoriteBooks />
      <PromoBanner />
    </div>
  );
};

export default Home;
