import React from "react";
import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavoriteBooks from "./FavoriteBooks";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBooks />
      <FavoriteBooks />
      <PromoBanner />
      <OtherBooks />
    </div>
  );
};

export default Home;
