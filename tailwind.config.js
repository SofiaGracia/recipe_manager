/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui")
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
    // themes: ["bumblebee"],
  },
}
