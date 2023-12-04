import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa6";

function SiteFooter() {
  return (
    <Footer container className="bg-gray-900">
      <div className="w-full px-4 lg:px-24 text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          {/* logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2">
            <FaBlog className="inline-block" />
            Books
          </Link>
          <Footer.LinkGroup className="text-white">
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className="border-t border-gray-700" />
        <Footer.Copyright href="#" by="ckiroshan™" year={2023} />
      </div>
    </Footer>
  );
}

export default SiteFooter;
