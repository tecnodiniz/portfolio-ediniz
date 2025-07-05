import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

interface NavItem {
  label: string;
  href: string;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("Header");

  const NavItems: NavItem[] = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#about" },
    { label: t("experience"), href: "#experience" },
    { label: t("projects"), href: "#projects" },
    { label: t("skills"), href: "#skills" },
    { label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-bg/90 backdrop-blur-sm py-3 neon-border"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container px-6 flex justify-between items-center">
        <Link href="/" className="font-orbitron text-2xl font-bold relative">
          <span className="neon-text relative z-10" data-text="E_DINIZ">
            E_DINIZ
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <LocaleSwitcher />
          {NavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative font-orbitron text-sm font-medium transition-colors duration-200 hover:text-primary group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 cursor-pointer z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 
            ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 
            ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 
            ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`h-[100vh] fixed inset-0 bg-background/95 flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="mb-4">
            <LocaleSwitcher />
          </div>
          {NavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-orbitron text-xl font-medium neon-text"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
