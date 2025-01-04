import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [isHovered, setIsHovered] = useState(false);
  const handleDownload = () => {
    // URL of the file to download
    const fileUrl = "/karan_singh_resume(updated).pdf"; // Replace with your file URL
    const fileName = "karan_singh_ui_ux_designer.pdf"; // The name of the downloaded file

    // Create an anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    // Append the anchor to the body (required for Firefox)
    document.body.appendChild(link);

    // Programmatically click the anchor to trigger the download
    link.click();

    // Remove the anchor from the DOM
    document.body.removeChild(link);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/">
            <a className="flex items-center">
              <img
                src="/img/nav-logo.png"
                className="mr-3 w-36"
                alt="site Logo"
              />
            </a>
          </Link>
          {menuOpen && (
            <div className="fixed inset-0 bg-background/95 backdrop-blur-md bg-black/60 text-white z-40 md:hidden">
              <div className="flex flex-col items-center justify-center h-full">
                <button
                  onClick={handleMenu}
                  variant="ghost"
                  className="absolute bottom-4 right-4"
                >
                  <IoIosCloseCircleOutline
                    color="white"
                    className="h-12 w-12 font-lg"
                  />
                  <span className="sr-only">Close menu</span>
                </button>

                <nav className="flex flex-col items-center space-y-6 text-lg">
                  <a href="#" className="hover:text-primary transition-colors">
                    Home
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Services
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Portfolio
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </nav>

                <Link className="relative inline-block" href="/" to="/">
                  <div
                    className={`absolute inset-0 border-2 border-dashed border-white rounded-md transition-opacity duration-200 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                  <button
                    className={`relative px-6 py-3 bg-primary text-black flex mt-10  bg-white items-center  border-[1.5px] rounded-md transition-all duration-200 ease-in-out ${
                      isHovered ? "-translate-x-2 -translate-y-2" : ""
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => handleDownload()}
                  >
                    Download CV &nbsp;
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          )}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 border rounded-lg md:hidden hover:text-black hover:bg-white  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white  "
            onClick={handleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.54 8.30965C18.8986 8.30965 20 7.20827 20 5.84965C20 4.49103 18.8986 3.38965 17.54 3.38965C16.1814 3.38965 15.08 4.49103 15.08 5.84965C15.08 7.20827 16.1814 8.30965 17.54 8.30965Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.46001 8.30965C7.81863 8.30965 8.92 7.20827 8.92 5.84965C8.92 4.49103 7.81863 3.38965 6.46001 3.38965C5.10139 3.38965 4 4.49103 4 5.84965C4 7.20827 5.10139 8.30965 6.46001 8.30965Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.54 20.6096C18.8986 20.6096 20 19.5083 20 18.1496C20 16.791 18.8986 15.6896 17.54 15.6896C16.1814 15.6896 15.08 16.791 15.08 18.1496C15.08 19.5083 16.1814 20.6096 17.54 20.6096Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.46001 20.6096C7.81863 20.6096 8.92 19.5083 8.92 18.1496C8.92 16.791 7.81863 15.6896 6.46001 15.6896C5.10139 15.6896 4 16.791 4 18.1496C4 19.5083 5.10139 20.6096 6.46001 20.6096Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto flex justify-center"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border flex justify-center border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black ">
              <li className="flex items-center">
                <Link to="/" className="flex justify-center">
                  <a
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-600 md:p-0 dark:text-white md:dark:text-orange-400"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/portfolio">
                  <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Portfolio
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/contact">
                  <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link className="relative inline-block" href="/" to="/">
                  <div
                    className={`absolute inset-0 border-2 border-dashed border-white rounded-md transition-opacity duration-200 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                  <button
                    className={`relative px-6 py-3 bg-primary text-primary-foreground flex  bg-white items-center  border-[1.5px] rounded-md transition-all duration-200 ease-in-out ${
                      isHovered ? "-translate-x-2 -translate-y-2" : ""
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => handleDownload()}
                  >
                    Download CV &nbsp;
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
