module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Red Hat Display", "Helvetica", "Arial", "sans-serif"],
    },
    colors: {
      primary: "hsl(225, 100%, 94%)",
      secondary: "hsl(245, 75%, 52%)",
      third: "hsl(225, 100%, 98%)",
      four: "hsl(224, 23%, 55%)",
      darkBlue: "hsl(223, 47%, 23%)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
