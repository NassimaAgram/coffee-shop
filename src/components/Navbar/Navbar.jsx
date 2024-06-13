import React from "react";
import { FaCoffee } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "home",
  },
  {
    id: 2,
    name: "Services",
    link: "services",
  },
  {
    id: 3,
    name: "About",
    link: "about",
  },
  {
    id: 4,
    name: "Testimonials",
    link: "testimonials",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container ">
          <div className="flex justify-between items-center">
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                Coffee Bliss
              </a>
            </div>

            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <ScrollLink
                      to={menu.link}
                      smooth={true}
                      duration={500}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200 cursor-pointer"
                    >
                      {menu.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
              <button className=" bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
                Order
                <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
