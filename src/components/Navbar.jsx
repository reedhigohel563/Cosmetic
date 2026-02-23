import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { id: 1, name: "Services", link: "/services" },
    { id: 2, name: "Industries", link: "/industries" },
    { id: 3, name: "Reports", link: "/reports" },
    { id: 4, name: "About", link: "/about" },
  ];

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <img src="/cosmofav.png" alt="logo" className="w-12 h-12" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.id}
                  to={`${item.link}`}
                  className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                  style={{
                    color: "#2B2B2B",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Link
                to={"/contact"}
                className="text-sm font-medium px-5 py-2.5 rounded-xl border transition-all duration-200 hover:shadow-md text-secondary-color border-secondary-color"
              >
                Request Proposal
              </Link>
              <Link
                href="#contact"
                className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-all duration-200 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-primary-color to-secondary-color"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                  style={{ background: "#2B2B2B" }}
                />
                <span
                  className={`block h-0.5 w-6 transition-all ${menuOpen ? "opacity-0" : ""}`}
                  style={{ background: "#2B2B2B" }}
                />
                <span
                  className={`block h-0.5 w-6 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  style={{ background: "#2B2B2B" }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden bg-white border-t px-6 py-6 space-y-4"
            style={{ borderColor: "#E8D8C3" }}
          >
            {navLinks.map((item) => (
              <Link
                key={item.id}
                to={`${item.link}`}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium py-2"
                style={{
                  color: "#2B2B2B",
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to={"/contact"}
              className=" block text-center text-sm font-semibold px-5 py-3 rounded-xl text-white mt-2 text-sm  text-secondary-color border-secondary-color bg-primary-color"
            >
              Request Proposal
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
