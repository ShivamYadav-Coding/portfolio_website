import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HashLink } from "react-router-hash-link";
import { BsSun } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

function Navbar({ theme, handleThemeSwitch }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="dark:bg-gray-900 bg-gray-50 fixed z-10 top-0 left-0 right-0 drop-shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center w-full justify-between">
            <div className="flex-shrink-0">
              <h1 className="font-cursive dark:text-gray-50 text-gray-950 font-bold text-3xl">
                Shivam Yadav
              </h1>
            </div>
            <div className="hidden md:block pr-10">
              <div className="ml-10 flex items-baseline space-x-4">
                <HashLink
                  to="#home"
                  smooth
                  className=" dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white hover:text-gray-950 px-3 py-2 rounded-md font-medium"
                >
                  Home
                </HashLink>

                <HashLink
                  to="#about"
                  smooth
                  className="dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white hover:text-gray-950 px-3 py-2 rounded-md font-medium"
                >
                  About
                </HashLink>

                <HashLink
                  to="#projects"
                  smooth
                  className="dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white hover:text-gray-950 px-3 py-2 rounded-md font-medium"
                >
                  Projects
                </HashLink>

                <HashLink
                  to="#about"
                  smooth
                  className="dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white hover:text-gray-950 px-3 py-2 rounded-md font-medium"
                >
                  Resume
                </HashLink>

                <a
                  href="https://night-train.hashnode.dev/"
                  target="_blank"
                  className="dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white hover:text-gray-950 px-3 py-2 rounded-md font-medium flex items-center"
                >
                  Blog
                  <BiLinkExternal />
                </a>
              </div>
            </div>
          </div>

          <div className="w-10 mx-2">
            <button
              className="bg-slate-50 dark:bg-slate-900 flex justify-center items-center border-2 border-slate-700 dark:border-slate-200 h-10 w-10 rounded-full cursor-pointer"
              onClick={handleThemeSwitch}
            >
              {theme == "dark" ? (
                <BsSun className="text-slate-50" />
              ) : (
                <BsMoonStars className="text-slate-900" />
              )}
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="dark:bg-gray-800 bg-gray-200 inline-flex items-center justify-center p-2 rounded-md dark:text-gray-400  dark:hover:text-white text-gray-950 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <HashLink
                to="#home"
                smooth
                className="dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white hover:text-gray-950 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </HashLink>

              <HashLink
                to="#about"
                smooth
                className="dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white hover:text-gray-950 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </HashLink>

              <HashLink
                to="#projects"
                smooth
                className="dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white hover:text-gray-950 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </HashLink>

              <HashLink
                to="#about"
                smooth
                className="dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white hover:text-gray-950 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </HashLink>

              <a
                href="https://night-train.hashnode.dev/"
                target="_blank"
                className="dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white hover:text-gray-950 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
