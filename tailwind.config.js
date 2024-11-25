/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
        "hind": ["Hind", "sans-serif"],
        "kite": ["Kite One", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#ecfdf6",
          100: "#d0fbe6",
          200: "#a5f5d2",
          300: "#6beabc",
          400: "#30d79f",
          500: "#0cbc87",
          600: "#02996f",
          700: "#017b5c",
          800: "#04614a",
          900: "#04503e",
          950: "#012d24",
        } , // green
        secondary: "#FD7E14", // orange
        paraPrimary: "#404040", // dark gray
        paraSecondary: "#737373", // gray
        paraTertiary: "#D4D4D4", // light gray
        headingPrimary: "#171717", // dark gray
        headingSecondary: "#F5F5F5", // light gray
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
