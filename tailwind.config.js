/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,css}"], // include CSS files
  theme: {
    extend: {
      fontFamily: {
        sans: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
