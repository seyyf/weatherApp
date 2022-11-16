/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      ...colors,
    },
  },
  plugins: [],
};
