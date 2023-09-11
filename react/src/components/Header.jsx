import { useState } from 'react';
import Hero from "./Hero";
import PropTypes from "prop-types";

function MobileMenuIcon({ isOpen }) {
  return (
    <svg
      className="h-6 w-6 fill-current"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isOpen ? (
        <path
          clipRule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          fillRule="evenodd"
        />
      )}
    </svg>
  );
}

export default function Header({ config }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative flex h-screen w-full overflow-hidden">
      <nav className="relative z-20 top-0 right-0 w-full inline-block px-10 pt-5 text-2xl text-white bg-transparent bg-opacity-50 rounded-xl">
        <div className="flex justify-between items-center">
          <div>
            <a href="/">
              <img
                alt="Picnic Bistro Logo"
                className="h-20 lg:h-32"
                src="assets/img/picnic-logo-white.svg"
              />
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex">
              {config.navigation.map((menu) => {
                return (
                  <li key={menu.label} className="px-4 py-4">
                    <a
                      className="text-menu--item tracking-widest font-thin uppercase"
                      href={menu.URL}
                    >
                      {menu.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* <!-- HAMBURGER MENU (MOBILE) --> */}
          <div className="block lg:hidden">
            <button
              onClick={() =>{
                setIsOpen( !isOpen )
              }}
              className={
                `block lg:hidden px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white ${isOpen ? "transition transform-180" : ""}`
              }
              type="button"
            >
              <MobileMenuIcon isOpen={isOpen} />
            </button>
          </div>
          {/* <!-- HAMBURGER MENU (MOBILE) --> */}
        </div>
        <div className={
          `w-full h-full z-50 lg:hidden lg:flex lg:items-center lg:w-auto text-right ${isOpen ? "block" : "hidden" }`
          }>
          <ul className="pt-6 lg:pt-0 list-reset lg:flex justify-start flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white no-underline"
                href="index.html"
              >
                HOME
              </a>
            </li>
            {config.navigation.map((menu) => {
              return (
                <li key={menu.label} className="mr-3">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                    href={menu.URL}
                  >
                    {menu.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {/* <!-- Mobile Links --> */}

      {/* <!-- Hero  --> */}
      <Hero />
      {/* <!-- Hero  --> */}

      {/* <!-- Video Background Element --> */}
      {/* <!-- <video autoplay className="absolute z-10 w-full h-full object-cover" id="myVideo" playsinline
        loop muted poster="assets/img/sunset.jpg">
      <source src="assets/img/video/picnic.mp4" type="video/mp4">
    </video> --> */}
    </header>
  );
}

Header.propTypes = {
  config: PropTypes.object,
};
