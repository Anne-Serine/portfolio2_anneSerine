import { NavLink } from "react-router-dom";

function Nav({ isOpen, closeMenu }) {
  return (
    <nav
      className={`absolute md:relative top-[100%] w-full pb-2 z-10 bg-port-bg  ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <ul className="container block justify-center text-center md:flex flex-wrap md:gap-8">
      <li className="pb-3 md:py-0 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " border-s border-s-port-yellow p-1 px-4"
                : "hover:text-port-yellow hover:border-s hover:border-port-yellow p-1 px-4"
            }
            onClick={closeMenu}
          >
           PORTFOLIO
          </NavLink>
        </li>

        <li className="pb-3 md:py-0">
          <a
            href="/#about"
            className="hover:text-port-yellow hover:border-s hover:border-port-yellow p-1 px-4"
            onClick={closeMenu}
          >
            ABOUT
          </a>
        </li>

        <li className="pb-3 md:py-0">
          <a
            href="/#skills"
            className="hover:text-port-yellow hover:border-s hover:border-port-yellow p-1 px-4"
            onClick={closeMenu}
          >
            SKILLS
          </a>
        </li>

        <li className="pb-3 md:py-0">
          <NavLink
            to="/sandbox"
            className={({ isActive }) =>
              isActive
                ? " border-s border-s-port-yellow p-1 px-4"
                : "hover:text-port-yellow hover:border-s hover:border-port-yellow p-1 px-4"
            }
            onClick={closeMenu}
          >
            SANDBOX
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
