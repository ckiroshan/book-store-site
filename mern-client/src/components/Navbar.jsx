import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

function Navbar() {
  // Use state hooks
  const [isMenuOpen, setIsMenuOpen] = useState(false); // set isMenuOpen to false
  const [isSticky, setSticky] = useState(false); // set isSticky to false

  // Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Use effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Call function
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Nav-items
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell your book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

}

export default Navbar;
