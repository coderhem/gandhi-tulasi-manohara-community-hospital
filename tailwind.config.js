/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4b00b3",
          100: "#64B5F6",
        },
        secondary: {
          DEFAULT: "#008000",
          100: "#64B5F6",
        },
        "ss-green": {
          DEFAULT: "#81C784",
          100: "#4CAF50",
        },
        darkgrey: {
          DEFAULT: "#424242",
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