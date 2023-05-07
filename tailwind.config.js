/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik Moonrocks', cursive;"
      }, keyframes: {
        zoom: {
          '0%': { transform: "scale(0)", opacity: "0" },
          '100%': { transform: "scale(1)", opacity: "1" }
        },
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        upToDown: {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": {opacity: "1", transform: "translateY(0)"}
        }
      }, animation: {
        zoom: "zoom .3s forwards",
        show: "show .3s forwards",
        upToDown: "upToDown .3s forwards"
      },colors: {
        blueDark: "#051e27",
        bgDark100: "#263544",
        violet: "#747796",
        light: "#beb6d9",
        white: "#e7d9e7"
      }

    },
  },
  plugins: [],
}

