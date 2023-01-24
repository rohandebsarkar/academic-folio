/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./content/**/*.{md,html}", "./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f2f2f2',
          800: '#0f0f0f',
        },
        secondary: {
          100: '#828282',
          800: '#828282',
        },
        theme: {
          100: '#0000d0',
          800: '#00f1ff',
        }
      }
    },
  },
  plugins: [
    require("nightwind"),
  ],
};
