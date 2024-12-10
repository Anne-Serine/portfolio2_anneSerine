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
    <header className="relative py-3 flex flex-col gap-4">
      <div className="container flex flex-wrap justify-center items-center">
        <Link to="/" className="min-scale-75 scale-75 sm:scale-100">
          <img src="/public/assets/ASblackWhite 1.svg" className="size-20" alt="logo" />
        </Link>
        <div className="flex gap-5 w-full sm:max-w-max justify-end">
          <div className="flex order-1 w-auto md:hidden">
            <Button
              type="tertiary"
              onClick={() => setIsOpen(!isOpen)}
              icon={<Menu color="white" size={22} />}
            />
          </div>
        </div>
      </div>
      <Nav isOpen={isOpen} closeMenu={closeMenu} />
    </header>
  )
}

export default Header;