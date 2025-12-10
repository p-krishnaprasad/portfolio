import { MdOutlineLightMode } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";

import { useTheme } from "../../context/ThemeContext.jsx";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="absolute top-8 right-12 z-50" onClick={toggleTheme}>
      {theme === "dark" ? (
        <MdOutlineLightMode className="w-8 h-8" />
      ) : (
        <RiMoonFill className="w-8 h-8" />
      )}
    </div>
  );
}
