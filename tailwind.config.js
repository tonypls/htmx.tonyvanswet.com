/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {
      textShadow: {
        "neon-green": "0 0 1px #00cc00, 0 0 5px #00cc00",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-textshadow"),
  ],
};
