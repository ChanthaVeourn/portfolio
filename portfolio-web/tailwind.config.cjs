/** @type {import('tailwindcss').Config} */
module.exports ={
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "join-cloud": {
          "0%, 100%": {
            backgroundImage: `radial-gradient(at 45% 0%, rgb(89, 23, 194) 0, transparent 60% ),
            radial-gradient(at 35% 30%, rgb(166, 166, 57) 0, transparent 40% ),
            radial-gradient(at 80% 0%, rgb(29, 128, 137) 0, transparent 30% )`,
          },
          "50%": {
            backgroundImage: `radial-gradient(at 34% 10%, rgb(89, 23, 194) 0, transparent 60% ),
            radial-gradient(at 10% 25%, rgb(166, 166, 57) 0, transparent 40% ),
            radial-gradient(at 70% -10%, rgb(29, 128, 137) 0, transparent 30% )`,
          },
        },
        "floating" :{
          "0%, 100%": {
            transform: "translateY(-.25rem)"
          },
          "50%": {
            transform: "translateY(.25rem)"
          }
        },
        "slide-in": {
          "0%": {
            transform: "translateX(100%) translateY(25%) ",
            scale: ".5"
          },
          "100%": {
            transform: "translateX(0%) translateY(0%)",
            scale: "1"
          }
        },
        "slide-out": {
          "0%": {
            transform: "translateX(0%) translateY(0%)",
            opacity: "1"
          },
          "100%": {
            transform: "translateX(100%) translateY(25%) ",
            opacity: "0"
          }
        },
      },
        
      animation: {
        "join-cloud": "join-cloud .6s ease-in-out infinite",
        "floating": "floating 10s ease-in-out infinite",
        "slide-in": "slide-in .3s ease-out",
        "slide-out": "slide-out .2s ease-in",
      }
    },
    },
  plugins: [],
}
