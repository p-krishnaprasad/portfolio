import { useTheme } from "../../context/ThemeContext.jsx";

export default function TypewriterText({ text }) {
  const { theme } = useTheme();

  // 1. Define the colors for each mode
  const lightModeColor = "#000000"; // Black cursor for light mode
  const darkModeColor = "#FFFFFF"; // White cursor for dark mode

  // 2. Choose the color based on the current theme
  const dynamicColor = theme === "dark" ? darkModeColor : lightModeColor;

  // 3. Apply the chosen color via the inline CSS variable
  return (
    <p
      className="cursor typewriter-animation leading-[1.25]"
      style={{ "--cursor-color": dynamicColor }}
    >
      {text}
    </p>
  );
}
