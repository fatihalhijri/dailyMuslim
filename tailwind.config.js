/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Webku/**/*.{html,js}"],
  theme: {
    extend: {
      
      container:{
        center:true,
        padding: "1rem",
        screens: {
          lg:"1123px",
          xl:"1124px",
          "2xl": "1124px",
        },
      },
      fontFamily:{
        "Ubuntu":['Ubuntu', 'sans-serif'] 
      },
      animation: {
        blob: "blob 7s infinite ",
        'spin-slow':'spin 3s linear infinite',
        terbang: "terbang 7s infinite",
        geser: "terbang 10s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(230px, -150px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-70px, 10px) scale(1.0)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        },
        terbang: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(120px, -70px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-70px, 10px) scale(1.0)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        },
        geser: {
          "0%": {
            transform: "translate(0px, 0px) scale(0)",
          },
          "33%": {
            transform: "translate(20px, -10px) scale(0.7)",
          },
          "66%": {
            transform: "translate(-10px, 40px) scale(2.7)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        }
      }
    },
  },
  plugins: [],
}
