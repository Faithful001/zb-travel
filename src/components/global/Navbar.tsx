import { useState } from "react";
import { navbarData } from "../../data/navbar.data";
import brand_logo from "../../../public/assets/logos/brand_logo.png";
import twitter_icon from "../../../public/assets/icons/twitter_icon.png";
import insta_icon from "../../../public/assets/icons/insta_icon.png";
import hamburger_icon from "../../../public/assets/icons/hamburger_icon.svg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-20 fixed bg-white w-full lg:px-[100px] flex items-center justify-between px-[40px] py-[20.35px] text-dark font-medium">
      {/* Desktop Navigation */}
      <div className="lg:hidden flex items-center gap-x-[9px]">
        <a href="">
          <img
            src={insta_icon}
            alt="insta_icon"
            className="h-[20.62px] w-[20.62px]"
            onClick={toggleMenu}
          />
        </a>
        <a href="">
          <img
            src={twitter_icon}
            alt="twitter_icon"
            className="h-[20.62px] w-[20.62px]"
            onClick={toggleMenu}
          />
        </a>
      </div>
      <div className="hidden lg:flex items-center gap-x-[27px] w-full justify-start">
        {navbarData.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="text-dark font-medium relative group"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-dark transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>
      {/* Brand Logo */}
      <div className="flex-shrink-0">
        <img
          src={brand_logo}
          alt="brand_logo"
          className="lg:h-[63px] lg:w-[63px] h-[53px] w-[53px]"
        />
      </div>

      {/* Desktop Right Section */}
      <div className="hidden lg:flex items-center gap-x-[27px] w-full justify-end">
        <a href={""} className="text-dark font-medium relative group">
          Store
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-dark transition-all duration-300 group-hover:w-full" />
        </a>
        <button
          disabled
          className="opacity-50 cursor-not-allowed text-dark font-medium"
        >
          Search
        </button>
        <a href={""} className="text-dark font-medium relative group">
          Saves
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-dark transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="">
          <img
            src={twitter_icon}
            alt="twitter_icon"
            className="h-[23.59px] w-[23.59px]"
          />
        </a>
        <a href="">
          <img
            src={insta_icon}
            alt="insta_icon"
            className="h-[23.59px] w-[23.59px]"
          />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="focus:outline-none cursor-pointer"
        >
          <img src={hamburger_icon} alt="hamburger_icon" />
        </button>
      </div>

      {/* Mobile Menu Sheet */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.5,
            }}
            className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-8 right-10 text-dark focus:outline-none cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center gap-y-6">
              {navbarData.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-dark font-medium text-lg relative group"
                  onClick={toggleMenu}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-dark transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href={""}
                className="text-dark font-medium text-lg relative group"
                onClick={toggleMenu}
              >
                Store
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-dark transition-all duration-300 group-hover:w-full" />
              </a>
              <button
                disabled
                className="opacity-50 cursor-not-allowed text-dark font-medium text-lg"
              >
                Search
              </button>
              <a
                href={""}
                className="text-dark font-medium text-lg relative group"
                onClick={toggleMenu}
              >
                Saves
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-dark transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
