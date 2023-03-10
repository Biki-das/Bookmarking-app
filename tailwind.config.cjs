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
        slidedown: "slidedown 0.8s linear",
        slideright: "slideright 0.8s linear",
        slideleft: "slideleft 0.3s linear",
        shiftup: "shiftup 0.8s linear both",
        textfadein: "textfadein 0.8s linear",
        fasttextfadein: "fasttextfadein 0.5s linear",
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
        slideright: {
          "0%": { transform: "translateX(-50%)", opacity: "0" },
          "100%": { opacity: "1", transform: "none" },
        },
        slideleft: {
          "0%": { transform: "translateX(50%)", opacity: "0" },
          "100%": { opacity: "1", transform: "none" },
        },
        textfadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fasttextfadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shiftup: {
          "0%": { opacity: "0", transform: "translateY(25%)" },
          "100%": { transform: "none" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
