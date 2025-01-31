/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: {
          100: "#5562AD",
          200: "#6171C8",
          300: "#6E7CCE",
        },
        secondary: {
          100: "#D9D9D9",
          200: "#808080",
        },
        yellow: "#F89B11",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        radioCasnada: ["Radio Canada", "sans-serif"],
      },
      backgroundImage: {
        "rebellium-pattern": "url('./src/assets/sekiro.png')",
      },
      boxShadow: {
        'yellow': '0px 4px 44px 9px rgba(245,174,66,0.5)'
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
