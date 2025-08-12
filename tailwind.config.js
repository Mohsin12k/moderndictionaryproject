const { transform } = require('sucrase')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/*.js"],
  theme: {
    extend: {
      keyframes: {
        rotateAfter: {
        '0%': {transform: "rotate(0deg)"},
        '100%': {transform: "rotate(720deg)"}
        },
        rotateBefore: {
          '0%': {transform: "rotate(0deg)"},
          '100%': {transform: "rotate(-720deg)"}
        },
      },
      animation: {
        'rotate-after': "rotateAfter 0.5s ease-in-out",
        'rotate-before': "rotateBefore 0.5s ease-in-out"
      }
    },
  },
  plugins: [],
}

