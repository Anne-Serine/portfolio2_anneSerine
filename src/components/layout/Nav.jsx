import { NavLink } from "react-router-dom";

function Nav({ isOpen, closeMenu }) {

  return (
    <nav
      className={`absolute md:relative top-[100%] w-full pb-2 z-10  ${
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
                : "hover:text-port-yellow hover:bg-port-dark p-1 px-4"
            }
            onClick={closeMenu}
          >
            ABOUT
          </NavLink>
        </li>
          <li className="pb-3 md:py-0">
            <a href="#skills"
              className={({ isActive }) =>
                isActive
                ? "text-port-dark bg-port-yellow p-1 px-4 "
                : "hover:text-port-yellow hover:bg-port-dark p-1 px-4 "
              }
              onClick={closeMenu}
            >
              SKILLS
            </a>
          </li>
          <li className="pb-3 md:py-0 bg-daze-bg">
            <a href="#portfolio"
              className={({ isActive }) =>
                isActive
                ? "text-port-dark bg-port-yellow p-1 px-4"
                : "hover:text-port-yellow hover:bg-port-dark p-1 px-4"
              }
              onClick={closeMenu}
            >
              PORTFOLIO
            </a>
          </li>
          <li className="pb-3 md:py-0 bg-daze-bg">
            <NavLink
              to="/sandbox"
              className={({ isActive }) =>
                isActive
                ? "text-port-dark bg-port-yellow p-1 px-4 "
                : "hover:text-port-yellow hover:bg-port-dark p-1 px-4"
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
