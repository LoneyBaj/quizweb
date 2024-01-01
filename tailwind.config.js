/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:  {
      animation:{
        blob: "blob 7s infinite"
      },
      keyframes:{
        blob: {
          "0%":{
            transform: `translate(0)`
          },
          "33%":{
            transform: "translate(50px,-50px) scale(1.1)"
          },
          "66%":{
            transform: "translate(-20px,20px) scale(0.9)"
          },
          "100%":{
            transform: "translate(0px,0px) scale(1)"
          }
        },
        },
    },
  },
  plugins: [],
}

