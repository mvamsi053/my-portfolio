/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      mobile: { max: "428px" },
      // => @media (max-width: 428px) { ... }
    },
    extend: {
      colors: {
        primary1: "#64ffda",
        primary2: "#ccd6f6",
        bg: "#0a192f",
        slate: "#8892b0",
        navy: "#112240",
        slatelite: "#a8b2d1",
      },
      boxShadow: {
        one: "0 10px 30px -15px rgba(2,12,27,0.7)",
        two: "0 20px 30px -15px rgba(2,12,27,0.7)",
        sidebar: "-10px 0px 30px -15px rgba(2,12,27,0.7)",
      },
    },
  },
  plugins: [],
};
