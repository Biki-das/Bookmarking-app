/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./main.js"],
  theme: {
    extend: {
      colors: {
        softBlue: "hsl(231,69%,60%)",
        softRed: "hsl(0,94%,66%)",
        grayishBlue: "hsl(229,8%,60%)",
        veryDarkBlue: "hsl(229,31%,21%)",
      },
      animation: {
        slideup: "slideup 0.8s linear",
      },
      keyframes: {
        slideup: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { opacity: "1", transform: "none" },
        },
        slidedown: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { opacity: "1", transform: "none" },
        },
      },
    },
  },
  plugins: [],
};
