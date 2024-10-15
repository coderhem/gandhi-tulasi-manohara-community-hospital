/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e73324",
          100: "#d21502",
        },
        "ss-dark": {
          DEFAULT: "#262626",
          100: "#1F1D1A",
          200: "#171717",
        },
        danger: {
          DEFAULT: "#dc3545",
          100: "#e73324",
        },
        lightgrey: {
          DEFAULT: "#1717173d",
        },
        fontFamily: {
          base: ["Roboto"],
          lead: ["Merriweather Sans"],
        },
      },
    },
  },
  plugins: [],
}