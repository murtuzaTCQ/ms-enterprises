import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-transform duration-500 
        ${hidden ? "-translate-y-full" : "translate-y-0"} 
        backdrop-blur-xl bg-[#3B1F1D]/95 shadow-md border-b border-[#6D4A46]/30`}
    >
      <div className="max-w-7xl mx-auto px-8 py-2 flex justify-between items-center">

        {/* LOGO — now clickable */}
        <Link to="/#hero" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="MS Enterprises Logo"
            className="h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-md cursor-pointer"
          />
        </Link>

        {/* NAVIGATION */}
        <NavigationMenu>
          <NavigationMenuList className="space-x-10 text-lg font-medium text-gray-200 flex items-center">

            {/* HOME */}
            <NavigationMenuItem>
              <Link
                to="/#hero"
                className="hover:text-pink-300 transition"
              >
                Home
              </Link>
            </NavigationMenuItem>

            {/* PRODUCTS */}
            <NavigationMenuItem>
              <Link
                to="/#products"
                className="hover:text-pink-300 transition"
              >
                Products
              </Link>
            </NavigationMenuItem>

            {/* CONTACT */}
            <NavigationMenuItem>
              <Link
                to="/#contact"
                className="hover:text-pink-300 transition"
              >
                Contact
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

      </div>
    </nav>
  );
}
