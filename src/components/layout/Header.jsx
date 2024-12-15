import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import Button from "../common/Buttons";
import { Menu } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="relative py-3 flex md:flex-col gap-4 container justify-between md:justify-center items-center">
      <Link to="/" className=" p-5">
        <img src="/assets/Logos/logo.svg" alt="logo" />
      </Link>
      <div className="flex flex-wrap gap-5 w-full sm:max-w-max justify-end">
        <Nav isOpen={isOpen} closeMenu={closeMenu} />
        <div className="flex order-1 w-auto md:hidden sm:max-w-max">
          <Button
            type="tertiary"
            onClick={() => setIsOpen(!isOpen)}
            icon={<Menu color="white" size={22} />}
          />
        </div>
      </div>

    </header>
  )
}

export default Header;