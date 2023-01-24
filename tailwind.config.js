/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./content/**/*.{md,html}", "./layouts/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("nightwind"),
  ],
};
