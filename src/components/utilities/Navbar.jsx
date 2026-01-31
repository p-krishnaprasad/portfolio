import { useEffect, useState } from "react";

const sections = ["about", "experience", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      let current = "about";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100) current = section; // adjust offset as needed
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sections.map((section) => (
          <li key={section}>
            <a href={`#${section}`} className={`group flex items-center py-3 `}>
              <span
                className={`nav-indicator mr-4 h-px w-8 ${
                  active === section
                    ? "w-16 bg-black dark:bg-white"
                    : "bg-slate-600"
                }`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest ${
                  active === section
                    ? "font-bold dark:text-slate-400"
                    : "text-slate-500"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
